import React, { useState, useEffect } from 'react';
import styles from "./Input.module.scss";

function Input({ onSearch }) {
  const [query, setQuery] = useState('');
  const [maxResults, setMaxResults] = useState(10);

  useEffect(() => {
    if (query.length > 0) {
      const delayDebounceFn = setTimeout(() => {
        onSearch(query, maxResults);
      }, 500); // Adding a debounce delay of 500ms

      return () => clearTimeout(delayDebounceFn); // Cleanup the timeout
    }
  }, [query, maxResults, onSearch]);

  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
        required
      />
      <select
        value={maxResults}
        onChange={(e) => setMaxResults(Number(e.target.value))}
      >
        {[10, 20, 30, 40].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
    </form>
  );
}

export default Input;
