
// Path Finder API using Fetch API.
export const pathFinderApi = async(grids, start, end) => {
    try {
        const api = "http://localhost:8080/api/find-path";

        const response = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify({ grids, start, end })
        });

        // Server Response error.
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiResponse = await response.json();
        console.log(apiResponse, "API Response.");

        return apiResponse;
    } catch (error) {
        console.error(error, "error");
    }
}