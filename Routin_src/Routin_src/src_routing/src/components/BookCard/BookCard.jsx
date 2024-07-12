import { Link } from "react-router-dom";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <div className={styles.BookCard}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    </Link>
  );
};

export default BookCard;
