import express from 'express'
import env from 'dotenv';
env.config();
import connectDB from './connection/db.js';
import bookRoute from './routes/book.route.js'
import userRoute from "./routes/user.route.js"
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(cors());
app.use(express.json());
// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, ()=>{
    console.log(`Example app listiening on port ${PORT}`);
})