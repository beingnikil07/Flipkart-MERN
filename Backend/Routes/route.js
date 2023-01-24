import express from 'express';
import { userSignUp, userLogin } from '../Controller/user-controller.js';
import { getProducts } from '../Controller/product-controller.js';
const router = express.Router();   //we are importing it for routing in express

router.post("/signup", userSignUp);
router.post("/login", userLogin);

//route for Fetching products from database.
router.get("/products", getProducts);

export default router; 