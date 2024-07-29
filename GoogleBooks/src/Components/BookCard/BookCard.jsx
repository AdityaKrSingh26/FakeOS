import React from 'react';
import styles from "./BookCard.module.scss";
import { truncateDescription } from '../../services/TruncateDescription';

const dummyImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s";

const BookCard = ({ book, onBookClick }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail || dummyImage;
  return (
    <div className={styles.book} onClick={() => onBookClick(book)}>
      <img
        src={thumbnail}
        alt={book.volumeInfo.title}
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <div className="textInfo">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors?.join(', ')}</p>
        <p>{truncateDescription(book.volumeInfo?.description, 60)}</p>
      </div>
    </div>
  );
};

export default BookCard;
