import React, { useState } from 'react';
import "./App.css";

import Header from "./Components/Header/Header";
import Input from "./Components/SearchInput/Input";
import BookContainer from "./Container/BookContainer";
import Modal from "./Components/Modal/Modal.jsx";
import { fetchBooks } from './services/BooksApi';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError(null);
    setQuery(searchQuery);
    setCurrentPage(0);
    try {
      const data = await fetchBooks(searchQuery);
      if (data.items === undefined) {
        throw new Error("No books found");
      }
      setBooks(data.items || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBooks(query, 10, page * 10);
      setBooks(data.items || []);
      setCurrentPage(page);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <Header />
      <Input onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <BookContainer books={books} onBookClick={handleBookClick} />
      <Modal show={selectedBook !== null} onClose={handleCloseModal} book={selectedBook} />
      <div className="pagination">
        <button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
