import React from 'react'
import styles from './CartCard.module.scss'

function CartCard() {
    return (
        <div className={styles.cardCrat}>
            <div className={styles.cardImage}>
                <img src="https://via.placeholder.com/150" alt="Product" />
            </div>
            <div className={styles.cartInfo}>
                <h3>Product Name</h3>
                <p>Price: $100</p>
                <p className={styles.quantityButton}>Quantity:
                    <button>-</button>
                    1
                    <button>+</button>
                </p>
                <button className={styles.removeButton}>Remove</button>
            </div>
        </div>
    )
}

export default CartCard