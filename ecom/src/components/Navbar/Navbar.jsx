import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'
import Cart from '../../assets/cart.png'

function Navbar() {

    const navigate = useNavigate()

    return (
        <div className={styles.navbar}>
            <h1>e-cShop</h1>

            <div className="icons">
                <button onClick={() => navigate('/cart')}>
                    <img src={Cart} alt="cart" />
                </button>
            </div>

        </div>
    )
}

export default Navbar