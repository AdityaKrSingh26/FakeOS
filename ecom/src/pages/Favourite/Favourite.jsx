import React, { useState, useEffect } from 'react';
import styles from './Favourite.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../config/services';

function Favourite() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getFavoriteProducts = async () => {
            try {
                const productList = await fetchProducts();
                // console.log(productList);
                const filteredProducts = productList.filter(product => product.favourited);
                setFavoriteProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        getFavoriteProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.fav}>
            <h1>Favorite Products</h1>

            {favoriteProducts.length > 0 ? (
                <div className={styles.favWrapper}>
                    {favoriteProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div>No favorite products found.</div>
            )}
        </div>
    );
}

export default Favourite;
