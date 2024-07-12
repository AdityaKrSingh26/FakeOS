import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../../services/book-service";
import styles from "./BookPage.module.scss";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then((data) => setBook(data));
  }, [id]);

  return (
    <>
      {!book ? (
        <p>...loading</p>
      ) : (
        <div>
          <img src={book.cover_image_link} className={styles.Img} />
          <p>{book.title}</p>
        </div>
      )}
    </>
  );
};

export default BookPage;
