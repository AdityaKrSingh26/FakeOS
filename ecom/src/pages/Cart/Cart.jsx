import React from 'react'
import styles from './Cart.module.scss'
import CartCard from '../../components/CartCard/CartCard'

export default function Cart() {
    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cartContainer}>
                <CartCard />
                <CartCard />
                <CartCard />
            </div>

            <div className={styles.cartSummary}>
                <div>
                    <h2>Cart Summary</h2>
                    <p>Total Items: 3</p>
                    <p>Total Price: $300</p>
                </div>
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
        </div>


    )
}
