import React from 'react';
import styles from './BookCard.module.scss';

const truncateDescription = (description, wordLimit) => {
    const words = description?.split(' ');
    if (words?.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
};

const BookCard = ({ book, onBookClick }) => {
    return (
        <div className={styles.book} onClick={() => onBookClick(book)}>
            {book.volumeInfo.imageLinks && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            )}
            <div className="textInfo">
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors}</p>
                <p>{truncateDescription(book.volumeInfo?.description, 60)}</p>
            </div>
        </div>
    );
};

export default BookCard;
