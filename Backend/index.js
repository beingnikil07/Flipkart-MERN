import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import defaultData from './default.js'; //importing default data 
const PORT = 8000;
const app = express();  //initializing 

dotenv.config();  //it is must to configure dotenv.

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);    //calling database

app.listen(PORT, () => {
    console.log(`server running successfully on port ${PORT}`);
})
defaultData();   //calling default data so that data can be stored in mongo 
