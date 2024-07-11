import { useEffect, useState } from "react";
import { fetchDadJokes } from "../services/dadJokes-services";
import Message from "../components/ErrorMessage/ErrorMessage";
import Joke from "../components/Joke/Joke";

const JokeLoaderContainer = ({ term, limit, page, setPage }) => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    setFetchStatus("LOADING");
    fetchDadJokes(term, limit, page)
      .then((data) => {
        setFetchStatus("SUCCESS");
        setJokes(data.results);
      })
      .catch((e) => {
        setFetchStatus("FAILURE");
        setError(e.message);
      });
  }, [term, limit, page]);

  return (
    <>
      {fetchStatus === "LOADING" && <p> Loading ...</p>}
      {fetchStatus === "SUCCESS" &&
        jokes.map((joke) => <Joke key={joke.id} jokeTitle={joke.joke} />)}
      {fetchStatus === "FAILURE" && <ErrorMessage message={error} />}
      <div>
        <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}>Previous</button>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
      </div>
    </>
  );
};

export default JokeLoaderContainer;
