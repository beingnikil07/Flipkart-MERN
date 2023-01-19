import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import defaultData from './default.js'; //importing default data 
import Routes from './Routes/route.js';
import cors from 'cors';

const PORT = 5000;
const app = express();  //initializing 

dotenv.config();  //it is must to configure dotenv.

app.use(cors());
//using routes 
// '/' it is a default route you can also change it for requirement
//Router likne ka mean ye saare router ko use karega  
app.use('/',Routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);    //calling database

app.listen(PORT, () => {
    console.log(`server running successfully on port ${PORT}`);
})
defaultData();   //calling default data so that data can be stored in mongo 
