import { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./BooksPage.module.scss";

const BooksPage = () => {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <h1>Books</h1>
      <main className={styles.BooksPage}>
        {!books && <p>...loading</p>}
        {books?.length > 0 &&
          books.map((book) => <BookCard key={book.id} book={book} />)}
      </main>
    </div>
  );
};

export default BooksPage;
