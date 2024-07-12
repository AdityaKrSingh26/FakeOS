import React, { useState, useEffect } from 'react'
import "./App.css"

import Header from "./Components/Header/Header"
import Input from "./Components/SearchInput/Input"
import BookContainer from "./Container/BookContainer"
import { fetchBooks } from './services/BooksApi'

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const handleSearch = async (searchQuery, maxResults) => {
    setLoading(true);
    setError(null);
    setPage(0);
    setQuery(searchQuery);
    try {
      const data = await fetchBooks(searchQuery, maxResults, 0);
      setBooks(data.items || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (direction) => {
    const newPage = page + direction;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBooks(query, 10, newPage * 10);
      setBooks(data.items || []);
      setPage(newPage);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <Header />

      <Input onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <BookContainer books={books} />

    </div>
  );
};

export default App;