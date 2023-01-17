import express from 'express';
import {Connection} from './Database/db.js';  


const app = express();  //initializing 
const PORT = 8000;

Connection();    //calling database
app.listen(PORT, () => {
    console.log(`server running successfully on port ${PORT}`);
})