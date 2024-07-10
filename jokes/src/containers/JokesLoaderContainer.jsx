import { useEffect, useState } from "react";
import { fetchDadJokes } from "../services/dadJokes-services";
// import Message from "../../components/Mess;age/Message";
import Joke from "../components/Joke/Joke";

const JokeLoaderContainer = () => {
  const [joke, setJoke] = useState([]);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    fetchDadJokes()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setJoke(data.results);
        // console.log(data);
      })
      .catch((e) => {
        setFetchStatus("FAILURE");
        setError(e);
      });
  }, []);
  // console.log(joke);

  return (
    <>
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "SUCCESS" &&
        joke.map((joke) => {
          <Joke key={joke.id} jokeTitle={joke.joke} />
        })}
      {fetchStatus === "FAILURE" && (
        <Message message="oops something went wrong" variant="danger" />
      )}
    </>
  );
};
export default JokeLoaderContainer;
