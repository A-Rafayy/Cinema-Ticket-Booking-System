import axios from "axios";

const API_URL = "http://127.0.0.1:3001/movies/";

export const getMovies = async () => {
    const response = await axios.get(API_URL);
    return response;
    console.log(response);
}