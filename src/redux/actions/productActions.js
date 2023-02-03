import axios from "axios";
import * as actionType from '../constants/productConstant';
const URL = "http://localhost:5000";
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message })
    }
}


//api call for product description 
// ye starting wala () ye bracket pair Thunk hota hai aur api ko thunk ke through
//Hit krr rhe hai  
export const getProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionType.GET_PRODUCT_DETAIL_REQUEST }); //isse koi value to nii jayegi bss ek action jayega jisse humko pta chal lega kii request gyi hai
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionType.GET_PRODUCT_DETAIL_SUCCESS, payload: data });


    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCT_DETAIL_FAIL, payload: error.message });

    }



}