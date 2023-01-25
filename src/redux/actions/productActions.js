import axios from "axios";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants/productConstant';


const URL = "http://localhost:5000";
// ()=> ye aur kuch nhi humne thunk middleware ka use kiya hai 
//mean humne middleware ke sath apni api ko call kiya hai ,middleware ke sath ek fayda hota hai 
//ye humko access deta hai dispatch ka 
export const getProducts = () => async (dispatch) => {
    try {
        //Mai response se sirf data chahta hu isliye maine api ka response object hota hai
        //to maine destructuring kii help se data nikal liya 
        const { data } = await axios.get(`${URL}/ products`);
        //kyuki humne middleware ka use kiya hain isliye hum directly dispatch ka use krr sakte hai
        //Basically dispatch function internally hamare reducer ko call karta hai 
        //dispatch mai ek object hai jisme humne type aur value ko diya mean type kya hai api ka success hai ya failed hai
        //Humne yha prr type:'success' aaise yha nhi likhenge mean hum hardcore nhi karenge hum inko 
        //separate folder constants mai rakhenge 
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message })
    }
}

//remember dispatch ke call hote he humara reducer call hota hai,
//  dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }); ke just baad humara reducer call hoga
