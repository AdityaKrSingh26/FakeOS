import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearcBar";
import JokesLoaderContainer from "./containers/JokesLoaderContainer";

const App = () => {
  const [term, setTerm] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const handleSearch = (searchTerm, jokeLimit) => {
    setTerm(searchTerm);
    setLimit(jokeLimit);
    setPage(1); // Reset to the first page on new search
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <JokesLoaderContainer term={term} limit={limit} page={page} setPage={setPage} />
    </div>
  );
};

export default App;
