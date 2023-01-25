import { GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from '../constants/productConstant';


export const getProductsReducer = (state = { products: [] }, action) => {
    //products action se 2 cases dispatch hoyenge success aur failure ,to isliye differentiate
    //karne ke liye hum switch use krr rhe hai ,aur differentiate hum type se krr sakte hai
    //kyuki ek jjo dispatch ho rha hai uska type success dusre ka fail hai 
    switch (action.type) {
        //abhi maan lo piche se data na aaya ya phir ye cases match na hue to app hamari break 
        //ho legi issi wajah se hum log  state mai default products ko ek array de denge isse
        //hamara Ui break nii hoga app ka 
        case GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}