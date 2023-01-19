import express from 'express';
import {userSignUp} from '../Controller/user-controller.js';
const router = express.Router();   //we are importing it for routing in express

router.post("/signup",userSignUp);

export default router; 