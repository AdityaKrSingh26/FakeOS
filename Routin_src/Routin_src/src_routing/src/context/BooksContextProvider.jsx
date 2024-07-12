import { createContext, useState, useEffect } from "react";
import { getAllBooks } from "../services/book-service";

export const BooksContext = createContext(null);

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState();

  useEffect(() => {
    getAllBooks().then((books) => setBooks(books));
  }, []);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
