import { useState } from "react";
import styles from "./SearchForm.module.scss";

const SearchForm = ({ onSearch, onClearSearch }) => {

  const [query, setQuery] = useState('');
  const clearSearch = () => {
    setQuery("");
    onClearSearch();
  }


  return (
    <div className={styles.searchForm}>
      <form
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
          required
        />
        <button onClick={clearSearch}>X</button>
        <button className={styles.searchbtn} type="submit" onClick={() => onSearch(query)}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;