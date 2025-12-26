import bookModel from "../models/book.model.js";

export const getBook = async(req,res)=>{
    try {
        const book = await bookModel.find();
        console.log('book',book)
        res.status(200).json(book);
        // res.send(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            messsage : "Internal Server Error",
            error
        })
    }
}