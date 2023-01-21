import axios from "axios";

//for Signup
const URL = "http://localhost:5000";
export const AuthenticateSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);

    } catch (error) {
        console.log("Error while calling signup api", error);
    }

}

//for login

export const AuthenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);

    } catch (error) {
        console.log("Error while calling login api", error);
        return error.response;
    }
}

