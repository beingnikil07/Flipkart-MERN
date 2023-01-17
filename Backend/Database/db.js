import mongoose from "mongoose";
export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkart-crud.lrb1w9f.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Connect to Mongo successfully :)");

    } catch (error) {
        console.log("Error while connecting with database", error.message);
    }
};
