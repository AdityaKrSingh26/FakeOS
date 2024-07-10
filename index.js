const baseUrl = "https://icanhazdadjoke.com/search"

async function fetchData() {
    try {

        console.log("fetching data")
        const response = await fetch(baseUrl, {
            headers: {
                Accept: "application/json"
            }
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

fetchData()