import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/Firestore';
import styles from './ProductDescription.module.scss';
import Heart from "../../assets/heart.png";
import HeartFilled from "../../assets/heartFilled.png";

function ProductDescription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, 'products', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct(docSnap.data());
                setIsFavorite(docSnap.data().favourited);
            } else {
                console.log('No such document!');
            }
        };

        fetchProduct();
    }, [id]);

    const handleFavoriteToggle = async () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);

        // Update the Firestore document
        const docRef = doc(db, 'products', id);
        await updateDoc(docRef, {
            favourited: newFavoriteStatus
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productDesc}>
            <h1>Product Description</h1>

            <div className={styles.container}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productDesc__img}
                />

                <div className={styles.productDesc__info}>
                    <div className={styles.flexC}>
                        <h2 className={styles.productDesc__info__title}>
                            {product.name}
                        </h2>
                        <button onClick={handleFavoriteToggle}>
                            <img src={isFavorite ? HeartFilled : Heart} alt="Favorite" />
                        </button>
                    </div>

                    <p className={styles.productDesc__info__desc}>
                        {product.description}
                    </p>
                    <p className={styles.productDesc__info__price}>
                        Price: ${product.price}
                    </p>
                    <button onClick={() => navigate('/cart')} className={styles.productDesc__info__btn}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;
