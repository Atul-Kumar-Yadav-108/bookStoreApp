import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required:true,
        trim : true
    },
    description : {
        type : String,
        required:true,
        trim : true
    },
    price : {
        type : Number,
        required:true,
    },
    category : {
        type : String,
        required:true,
        trim : true
    },
    image : {
        type : String,
        required:true,
        trim : true
    },
    
},
{timestamps : true});

const bookModel = mongoose.model("Book",bookSchema);

export default bookModel;

