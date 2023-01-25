import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductsReducer } from "./reducers/productReducer";

//combineReducers basically ek fun hota hai jo ek argument ko leta hai as a object kii form mai
const reducer = combineReducers({
    //getProducts to hamara naam hai diya hua,aur humne apne actual reducer ko assign karwa diya 
    //abhi to hamre pass sirf ek reducer hai isliye humne idhar ek he likha...aage hum 
    //cart ke liye aur bhi reducers ko combine karne wale hain  
    getProducts: getProductsReducer
});

//humne thunk ko as an array liya 
const middleware = [thunk];

//createStore hamara do arguments leta hai ek hota hai hamara reducers aur dusra ek middleware 
//Hamare pass single reducer bhi ho sakta hai multiples bhi ho sakte hai 
//educers are functions that take the current state and an action as arguments,
// and return a new state result.
//Abhi hamare pass ek reducer hota to hum createStore mai directly likh dete but
//humpr hai ek to productReducer aur ek cartReducer ,to multiple reducer ke case mai 
//hum log combine karte hai reducers ko
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;