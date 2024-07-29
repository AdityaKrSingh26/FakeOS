import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/Firestore';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.scss';

function Home() {
    const [products, setProducts] = useState([]);
    console.log("Products:: ", products);
    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, 'products');
            const productSnapshot = await getDocs(productsCollection);
            const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productList);
        };
        fetchProducts();
    }, []);

    if (!products.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <h1 className={styles.heading}>Our Products</h1>
            <div className={styles.productWrapper}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
