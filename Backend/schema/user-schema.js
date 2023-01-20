import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,    //name se pehle jo space hoti hai remove(trim) kr dega
        min:5,   //main 5 length ho 
        max:20 
    },
    lastname:{
        type:String,
        required:true,
        trim:true,    //name se pehle jo space hoti hai remove(trim) kr dega
        min:5,   //main 5 length ho 
        max:20 
    },
    username:{
        type:String,
        required:true,
        trim:true,    //name se pehle jo space hoti hai remove(trim) kr dega
        unique:true,
        index:true,   //mongo khud se indexing lga de isliye true kiya
        lowercase:true,    //lower case ho na ho to mongo khud convert krr de 
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true 
    }
});

const user=mongoose.model('user',userSchema);  //user is the name of collection that is going to be build

export default user;