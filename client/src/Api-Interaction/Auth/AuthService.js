import axios from "axios";

const API_URL = "http://127.0.0.1:3001/user/";

export const signup = async (name, email, phone, password) => {
    console.log("hello");
    return await axios.post(API_URL + "signup", {
        name,
        email,
        phone,
        password,
    },
        {
            headers: { "Content-Type": "application/json" },
            // withCredentials: true
        }
    );
};

export const login = async (email, password) => {
    console.log("hello");
    const response = await axios.post(API_URL + "login", {
        email,
        password,
    });
    if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
        // console.log(localStorage.getItem("userId"));
    }
    // console.log(response.status);
    return response;
};

export const logout = () => {
    localStorage.removeItem("token");
};
