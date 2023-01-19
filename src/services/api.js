import axios from "axios";
const URL = "http://localhost:5000";
export const AuthenticateSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);

    } catch (error) {
        console.log("Error while calling signup api", error);
    }

}