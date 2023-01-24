//abhi mera ko jo data nikalna hai wo nikalna hai product collection mai se to mai karta
//hu product collection(schema) ko import
import Product from '../schema/products-schema.js'

export const getProducts = async (req, res) => {
    try {
        //find({}) empty obj dene se ye saare data ko dega ,hum condition ke base prr bhi
        //find krr sakte hai data ko 
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};