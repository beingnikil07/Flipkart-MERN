import express from 'express';
import {userSignUp,userLogin} from '../Controller/user-controller.js';
const router = express.Router();   //we are importing it for routing in express

router.post("/signup",userSignUp);
router.post("/login",userLogin);

export default router; 