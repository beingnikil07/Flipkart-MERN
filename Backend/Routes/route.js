import express from 'express';
import { userSignUp, userLogin } from '../Controller/user-controller.js';
import { getProducts,getProductById} from '../Controller/product-controller.js';
const router = express.Router();   //we are importing it for routing in express

router.post("/signup", userSignUp);
router.post("/login", userLogin);

//route for Fetching products from database.
router.get("/products", getProducts);

//route to fetch single product description
router.get("/product/:id", getProductById);


export default router; 