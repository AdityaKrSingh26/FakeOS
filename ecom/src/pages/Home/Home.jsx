import React from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Home.module.scss'

function Home() {
    return (
        <div>
            <Header />
            <h1 className={styles.heading}>Our Products</h1>
            <div className={styles.productWraper}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}

export default Home