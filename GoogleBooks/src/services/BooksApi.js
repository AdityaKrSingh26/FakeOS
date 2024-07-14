const baseUrl = "https://www.googleapis.com/books/v1/volumes"

export const fetchBooks = async (query, maxResults = 10,) => {
    try {

        const response = await fetch(`${baseUrl}?q=${query}&maxResults=${maxResults}`);
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};

// fetchBooks("harry potter")