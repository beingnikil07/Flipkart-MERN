import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
const PORT = 8000;
const app = express();  //initializing 

dotenv.config();  //it is must to configure dotenv. 
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);    //calling database
app.listen(PORT, () => {
    console.log(`server running successfully on port ${PORT}`);
})