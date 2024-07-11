import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const [limit, setLimit] = useState(5);

  const handleSearch = () => {
    onSearch(term, limit);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for a joke"
      />
      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
