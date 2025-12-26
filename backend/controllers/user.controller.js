import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const signup = async(req,res)=>{
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password){
            return res.status(400).json({message : "All fields are required."});
        }
        const existinguser = await userModel.findOne({email});
        if(existinguser){
            return res.status(409).json({message : "User already exists"});
        }
        const hashpassword = await bcrypt.hash(password, 10);
        await userModel({
            fullname,
            email,
            password : hashpassword
        }).save();
        res.status(200).json({message : "User registered successfully."});
    } catch (error) {
        console.log(`error ${error.message}`)
        res.status(500).json({message : error.message});
    }
}

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message : "All fields are required."});
        }
        const existinguser = await userModel.findOne({email});
        if(existinguser){
            const isMatch = await bcrypt.compare(password, existinguser.password);
            if(!isMatch){
                return res.status(401).json({message : "Invalid Password"});
            }
            res.status(200).json({message : "Login successfully.",user :{
                id : existinguser._id,
                fullname : existinguser.fullname,
                email : existinguser.email
            }});
        }else{
            res.status(401).json({message : "User does't exists."});
        }
    } catch (error) {
        console.log(`Error ${error.message}`);
        res.status(500).json({message : error.message});
    }
}

