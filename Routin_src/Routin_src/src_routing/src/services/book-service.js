export const getAllBooks = async () => {
  const response = await fetch("http://localhost:3000/books");
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data;
};

export const getBookById = async (id) => {
  const response = await fetch("http://localhost:3000/books/" + id);
  if (!response.ok) {
    throw new Error("Book not found");
  }
  return await response.json();
};
