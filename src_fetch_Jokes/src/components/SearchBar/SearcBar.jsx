import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("searched for " + input);
    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        value={input}
        onChange={onInputChange}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
