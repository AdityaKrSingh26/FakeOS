import React from 'react';
import styles from './BookCard.module.scss';

const BookCard = ({ book, onBookClick }) => {
    return (
        <div className={styles.book} onClick={() => onBookClick(book)}>
            {book.volumeInfo.imageLinks && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            )}
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors}</p>
        </div>
    );
};

export default BookCard;
