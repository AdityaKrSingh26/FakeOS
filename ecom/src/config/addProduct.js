import { db } from './Firestore.js';
import { doc, setDoc, collection, addDoc, getDocs } from 'firebase/firestore';
import products from './data.js';

const addProductsToFirestore = async () => {
    try {
        const productsCollectionRef = collection(db, 'products');

        // Fetch existing products
        const querySnapshot = await getDocs(productsCollectionRef);
        if (querySnapshot.empty) {
            console.log('No products found. Adding sample products...');

            for (const product of products) {
                const docRef = doc(db, 'products', product.id); // Use product.id as document ID
                await setDoc(docRef, product);
                console.log(`Added product with ID: ${product.id}`);
            }
        } else {
            console.log('Products already exist in the collection.');
        }
    } catch (error) {
        console.error('Error adding products to Firestore: ', error);
    }
};

// Execute the function
addProductsToFirestore();
