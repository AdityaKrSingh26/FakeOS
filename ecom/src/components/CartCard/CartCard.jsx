import React from 'react';
import styles from './CartCard.module.scss';

function CartCard({ product, removeFromCart, updateQuantity }) {
    const handleQuantityChange = (change) => {
        const newQuantity = product.quantity + change;
        if (newQuantity > 0) {
            updateQuantity(product.id, newQuantity);
        }
    };

    return (
        <div className={styles.cardCrat}>
            <div className={styles.cardImage}>
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={styles.cartInfo}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p className={styles.quantityButton}>
                    Quantity:
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    {product.quantity}
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </p>
                <button onClick={() => removeFromCart(product.id, product.quantity)} className={styles.removeButton}>Remove</button>
            </div>
        </div>
    );
}

export default CartCard;
