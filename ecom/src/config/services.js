import { collection, getDocs, doc, getDoc, updateDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from './Firestore';

// Fetch all products
export const fetchProducts = async () => {
    const productsCollection = collection(db, 'products');
    const productSnapshot = await getDocs(productsCollection);
    return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('No such document!');
    }
};

// Update product favorite status
export const updateProductFavoriteStatus = async (id, status) => {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, {
        favourited: status
    });
};

const CART_DOC_ID = "common_cart"; // Common cart document ID

export const getCart = async () => {
    const cartRef = doc(db, 'carts', CART_DOC_ID);
    const cartSnap = await getDoc(cartRef);
    if (cartSnap.exists()) {
        return cartSnap.data().items || [];
    }
    return [];
};

export const addToCart = async (product) => {
    if (!product.id) {
        throw new Error('Product ID is undefined');
    }

    const cartRef = doc(db, 'carts', CART_DOC_ID);
    const productRef = doc(db, 'products', product.id);

    try {
        // Fetch product document
        const productSnap = await getDoc(productRef);
        console.log('Product snapshot: ', productSnap.data());

        if (productSnap.exists()) {
            const currentQuantity = productSnap.data().quantity;
            console.log('Current quantity: ', currentQuantity);
            console.log('Product quantity: ', product.quantity);

            if (currentQuantity >= product.quantity) {
                // Update the product quantity in the products collection
                await updateDoc(productRef, {
                    quantity: currentQuantity - product.quantity
                });

                // Fetch cart document
                const cartSnap = await getDoc(cartRef);

                if (!cartSnap.exists()) {
                    // If cart document does not exist, create it
                    await setDoc(cartRef, { items: [] });
                }

                // Add the product to the cart
                await updateDoc(cartRef, {
                    items: arrayUnion(product)
                }, { merge: true });

            } else {
                console.log('Not enough stock available');
            }
        } else {
            console.log('No such product!');
        }
    } catch (error) {
        console.error('Error adding product to cart: ', error);
    }
};


export const removeFromCart = async (productId, quantity) => {
    const cartRef = doc(db, 'carts', CART_DOC_ID);
    const productRef = doc(db, 'products', productId);

    const cartSnap = await getDoc(cartRef);
    if (cartSnap.exists()) {
        const currentItems = cartSnap.data().items || [];
        const updatedItems = currentItems.filter(item => item.id !== productId);

        // Restore the product quantity in the products collection
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
            const currentQuantity = productSnap.data().quantity;
            await updateDoc(productRef, {
                quantity: currentQuantity + quantity
            });
        }

        await setDoc(cartRef, {
            items: updatedItems
        }, { merge: true });
    }
};

export const updateQuantity = async (productId, newQuantity) => {
    const cartRef = doc(db, 'carts', CART_DOC_ID);
    const productRef = doc(db, 'products', productId);

    const cartSnap = await getDoc(cartRef);
    const productSnap = await getDoc(productRef);

    if (cartSnap.exists() && productSnap.exists()) {
        const currentItems = cartSnap.data().items || [];
        const product = currentItems.find(item => item.id === productId);
        const currentQuantity = productSnap.data().quantity;

        if (product) {
            const quantityChange = newQuantity - product.quantity;
            if (quantityChange > 0 && currentQuantity >= quantityChange) {
                // Increase quantity in cart and decrease from products
                await updateDoc(productRef, {
                    quantity: currentQuantity - quantityChange
                });
                product.quantity = newQuantity;
            } else if (quantityChange < 0) {
                // Decrease quantity in cart and increase in products
                await updateDoc(productRef, {
                    quantity: currentQuantity - quantityChange
                });
                product.quantity = newQuantity;
            }

            await setDoc(cartRef, {
                items: currentItems
            }, { merge: true });
        }
    }
};
