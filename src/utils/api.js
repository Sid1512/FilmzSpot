import axios from "axios";

// Base URL for API requests
const BASE_URL = "https://api.themoviedb.org/3";

// Retrieve TMDB token from environment variables
const TOKEN_TMDB = import.meta.env.VITE_APP_TOKEN_TMDB;

// Set up headers for API requests
const headers = {
    Authorization: `Bearer ${TOKEN_TMDB}`,
};

export const fetchFromApi = async (url, params) => {
    try {
        // Make GET request to the API with provided URL and parameters
        const response = await axios.get(BASE_URL + url, {
            headers,
            params
        });

        // Return the API response data
        return response.data;
    } catch (error) {
        // Log and return the error if an error occurs during the request
        console.error("Error fetching data:", error);
        throw error;
    }
};
