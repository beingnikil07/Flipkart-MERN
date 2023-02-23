import express from 'express';
import { userSignUp, userLogin } from '../Controller/user-controller.js';
import { getProducts, getProductById } from '../Controller/product-controller.js';
import { addPaymentGateway } from '../Controller/payment-controller.js';
const router = express.Router(); 
router.post("/signup", userSignUp);
router.post("/login", userLogin);

//route for Fetching products from database.
router.get("/products", getProducts);

//route to fetch single product description
router.get("/product/:id", getProductById);

//for payment 
router.post("/payment", addPaymentGateway);


export default router; 