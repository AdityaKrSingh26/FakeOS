import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, updateQuantity } from '../../config/services';
import CartCard from '../../components/CartCard/CartCard';
import styles from './Cart.module.scss';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const items = await getCart();
            setCartItems(items);
            calculateTotals(items);
        };

        fetchCart();
    }, []);

    const calculateTotals = (items) => {
        let totalItems = 0;
        let cartTotal = 0;

        items.forEach(item => {
            totalItems += item.quantity;
            cartTotal += item.price * item.quantity;
        });

        setTotalItems(totalItems);
        setCartTotal(cartTotal);
    };

    const handleRemoveFromCart = async (productId, quantity) => {
        await removeFromCart(productId, quantity);
        const updatedCart = await getCart();
        setCartItems(updatedCart);
        calculateTotals(updatedCart);
    };

    const handleUpdateQuantity = async (productId, newQuantity) => {
        await updateQuantity(productId, newQuantity);
        const updatedCart = await getCart();
        setCartItems(updatedCart);
        calculateTotals(updatedCart);
    };

    if (cartItems.length === 0) {
        return <div>Cart is empty</div>;
    }
    if (!cartItems.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cartContainer}>
                {cartItems.map(product => (
                    <CartCard
                        key={product.id}
                        product={product}
                        removeFromCart={handleRemoveFromCart}
                        updateQuantity={handleUpdateQuantity}
                    />
                ))}
            </div>
            <div className={styles.cartSummary}>
                <div>
                    <h2>Cart Summary</h2>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: ${cartTotal}</p>
                </div>
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
        </div>
    );
}
