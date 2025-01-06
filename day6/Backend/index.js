import express from "express";
import mongoose  from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from './routes/userRoute.js';
import cors from 'cors';
const app=express();

//middleware for passing json request to body
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 8000 ;
const MONGOURL=process.env.MONGO_URL;


app.use('/api/user',router);

//connect to mongo DB

mongoose.connect(MONGOURL).then(()=>{    
    console.log("Database connected.");
    app.listen(PORT,()=>{
        console.log(`Server is running on locallhost:${PORT}`);
    });
})

.catch((err)=>{
    console.log("error occured");
});