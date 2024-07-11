export const fetchDadJokes = async (term, limit = 5, page = 1) => {
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${term}&limit=${limit}&page=${page}`, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch jokes");
  }
  const data = await response.json();
  return data;
};
