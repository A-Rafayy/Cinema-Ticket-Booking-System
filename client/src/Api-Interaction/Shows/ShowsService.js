import axios from "axios";

const API_URL = "http://127.0.0.1:3001/show/";

export const getShows = async () => {
    const shows = axios.get(API_URL);
    console.log(shows);
}