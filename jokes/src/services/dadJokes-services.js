export const fetchDadJokes = async () => {
  const response = await fetch("https://icanhazdadjoke.com/search", {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error("Some complicated error messge");
    // do some logging here to console or file
  }
  const data = await response.json();
  console.log(data, "test");
  return data;
};
