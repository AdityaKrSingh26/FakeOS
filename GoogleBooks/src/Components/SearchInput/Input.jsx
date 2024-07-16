import React, { useState, useEffect } from 'react';
import styles from "./Input.module.scss";

function Input({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
        required
      />
      <button type="submit" onClick={() => onSearch(query)}>
        Search
      </button>

    </form>
  );
}

export default Input;
