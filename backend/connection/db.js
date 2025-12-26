import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected`);
    } catch (error) {
        console.log(`Connection failed.${error}`);
        res.status(500).json({
            success : false,
            message : 'failed to connect database',
            error
        })
    }
}

export default connectDB;