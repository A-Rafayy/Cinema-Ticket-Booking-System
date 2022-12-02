import { ApiRoutes } from "./ApiRoutes";

const { baseURL } = ApiRoutes;

const getToken = () => {
    return JSON.parse(localStorage.getItem('token'))
}