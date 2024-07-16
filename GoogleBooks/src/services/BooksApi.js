const baseUrl = "https://www.googleapis.com/books/v1/volumes";

export const fetchBooks = async (query, maxResults = 10, startIndex = 0) => {
    try {
        const response = await fetch(`${baseUrl}?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`);
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
