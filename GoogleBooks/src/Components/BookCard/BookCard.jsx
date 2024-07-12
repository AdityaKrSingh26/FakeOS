import React from 'react';
import styles from './BookCard.module.scss';

const BookCard = ({ book }) => {
    const { volumeInfo } = book;
    return (
        <div className={styles.book}>
            <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
            <h3>{volumeInfo.title}</h3>
            <p>{volumeInfo.authors?.join(', ')}</p>
            {/* <p>{volumeInfo.description}</p> */}
        </div>
    );
};

export default BookCard;
