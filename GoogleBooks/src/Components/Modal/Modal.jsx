import React from 'react';
import styles from './Modal.module.scss';

const truncateDescription = (description, wordLimit) => {
    const words = description?.split(' ');
    if (words?.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
};

const Modal = ({ show, onClose, book }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modalContent}>
                    {book.volumeInfo.imageLinks && (
                        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                    )}
                    <h2>{book.volumeInfo.title}</h2>
                    <h3>{book.volumeInfo.authors?.join(", ")}</h3>
                    <p>{truncateDescription(book.volumeInfo.description, 100)}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
