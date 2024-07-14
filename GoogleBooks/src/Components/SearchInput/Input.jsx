import React, { useState, useEffect } from 'react';
import styles from "./Input.module.scss";

function Input({ onSearch }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 0)
      onSearch(query);
  }, [query]);

  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
        required
      />
    </form>
  );
}

export default Input;
