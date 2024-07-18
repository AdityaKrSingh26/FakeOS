import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProductCard.module.scss'
import DummyImage from '../../assets/headphone.png'


function ProductCard() {
    const navigate = useNavigate()

    return (
        <div className={styles.productWrapper}>
            <img src={DummyImage} alt="Product" />
            <h3>Headphones</h3>
            <p>Price: $100</p>
            <button onClick={() => navigate('/product/3')}>Click to Buy</button>
        </div>
    )
}

export default ProductCard