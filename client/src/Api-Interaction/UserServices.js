import axios from "axios";

const API_URL = "http://127.0.0.1:3001/user/";
const userId = localStorage.getItem("userId");
const token = JSON.parse(localStorage.getItem('token'));

export const getUserInfo = async () => {
    const User = await axios.get(API_URL + `info/:?userId=${userId}`,
    //     {
    //     params: {
    //         userId
    //     } 
    // },
    // axios.get(api?&${param}=${value})
        {
            headers:
            {
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }
    );
    return User;
};