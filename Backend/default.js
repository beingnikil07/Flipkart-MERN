import { Products } from './constants/data.js';   //must write with js extension
import Product from './schema/products-schema.js'; //importing schema
const defaultData = async () => {
    try {
        await Product.insertMany(Products);
        console.log("Data stored in mongo successfully");
    } catch (error) {
        console.log("Error while inserting default data", error.message);
    }
}
export default defaultData;