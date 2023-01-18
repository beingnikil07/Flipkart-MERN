import mongoose from 'mongoose';   //importing mongoose library

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

//avv mongoose ko lekar mai ek model create karung aur uske ander mai apne database ya mongodb 
// mai hum isko collection bolte Hai, ka name dalunga 

const Product = mongoose.model('product', productSchema);

export default Product; 