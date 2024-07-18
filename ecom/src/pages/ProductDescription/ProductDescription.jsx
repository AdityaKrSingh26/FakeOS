import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProductDescription.module.scss'
import DummyImage from '../../assets/headphone.png'

function ProductDescription() {
    const navigate = useNavigate()

    return (
        <div className={styles.productDesc}>
            <h1>Product Description</h1>

            <div className={styles.container}>
                <img src={DummyImage} alt="" className={styles.productDesc__img} />

                <div className={styles.productDesc__info}>

                    <h2 className={styles.productDesc__info__title}>
                        Headphone
                    </h2>

                    <p className={styles.productDesc__info__desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure doloremque enim cupiditate sequi recusandae incidunt officia odit nemo sint culpa aliquam quo amet odio sapiente, fugit ut ipsum, ratione nihil aliquid alias hic voluptate facere?
                    </p>

                    <p className={styles.productDesc__info__price}>
                        Price: $100
                    </p>

                    <button
                        onClick={() => navigate('/cart')}
                        className={styles.productDesc__info__btn}
                    >
                        Add to Cart
                    </button>

                </div>
            </div>

        </div>
    )
}

export default ProductDescription