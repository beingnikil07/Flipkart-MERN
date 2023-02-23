import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import defaultData from './default.js'; //importing default data 
import Routes from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const PORT = 5000;
const app = express();  //initializing 

dotenv.config();  //it is must to configure dotenv.

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//using routes 
// '/' it is a default route you can also change it for requirement
//Router likne ka mean ye saare router ko use karega  
app.use('/', Routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);    //calling database

app.listen(PORT, () => {
    console.log(`server running successfully on port ${PORT}`);
})
defaultData();   //calling default data so that data can be stored in mongo 


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] =uuidv4();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='500';
paytmParams['CALLBACK_URL']='http://localhost:5000/callback';
paytmParams['EMAIL']='kumarnikil220@gmail.com';
paytmParams['MOBILE_NO']='123456789';


