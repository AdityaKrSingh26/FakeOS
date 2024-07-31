import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const defaultImage = 'https://via.placeholder.com/150';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const imgSrc = product.imageUrl || defaultImage;
    return (
        <div className={styles.productWrapper}>
            <img src={imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}>Click to Buy</button>
        </div>
    );
}

export default ProductCard;
