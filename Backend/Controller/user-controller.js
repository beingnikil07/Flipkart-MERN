import User from '../schema/user-schema.js';

export const userSignUp = async (req, res) => {
    try {
        //saving request data to variable to ye data mujhpr front end se aa rha hai to mere ko isko                         
        // validate karna padega to hum phir se user ke liye ek schema banayenge
        const user = req.body;
        const newUser = new User(user);   //passing user data to the User schema 
        await newUser.save();    //To store the data into mongo database
        // Avv agar data save ho jaata hai to hum uss api ko ek response send krr denge with
        // status code ke sath
        res.status(200).json({ message: user });

    } catch (error) {
        //Avv agar save karte hue koi error aayegi to mai usko bhi response ke through send krr dunga
        //api ko
        res.status(500).json({ message: error.message });
    }
};