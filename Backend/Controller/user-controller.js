import User from '../schema/user-schema.js';

//Route for sign up
export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            return res.status(401).json({ message: "username already exist :(" });
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ message: user });

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};

//Route for  user login

export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        let user = await User.findOne({ username: username, password: password });   //ye database se find karega requested user ko
        if (user) {
            return res.status(200).json(`${username} login successfully`);
        } else {
            return res.status(401).json('Invalid Login,Please try again');
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}  