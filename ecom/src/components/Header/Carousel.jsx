import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(intervalId); 
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
            <button className={styles.prev} onClick={prevSlide}>
                &lt;
            </button>
            <div className={styles.slides}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button className={styles.next} onClick={nextSlide}>
                &gt;
            </button>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
