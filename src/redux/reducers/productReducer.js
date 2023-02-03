import * as actionType from '../constants/productConstant';
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}

/* Upper getProductsReducer mai humne default products ko array rakha tha isliye
kyuki bahut saare products ko fetch krr ke laa rhe the hum...But getProductsDetails
mai hum sirf ek product kii detail ko le rhe hai to isliye product ko hum by 
default ek object rakhenge kyuki single product lekar aa rhe hai hum 
*/



//Reducer for get a product description
export const getProductsDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAIL_REQUEST:
            return { loading: true }
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        case actionType.GET_PRODUCT_DETAIL_RESET:
            return { product: {} }
        default:
            return state;
    }



}