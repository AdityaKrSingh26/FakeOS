import React from 'react';
import BookCard from '../Components/BookCard/BookCard';
import styles from './BookContainer.module.scss';

const BookContainer = ({ books, onBookClick }) => (
    <div className={styles.bookGrid}>
        {books.map((book) => (
            <BookCard key={book.id} book={book} onBookClick={onBookClick} />
        ))}
    </div>
);

export default BookContainer;
