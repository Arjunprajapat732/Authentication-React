import bodyparser from "body-parser"
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import web from "./routes/web.js"

dotenv.config();
const app = express();
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL).then(() => {
    console.log('db connected');
    app.listen(PORT, () =>{
        console.log(`server is runing on this port : ${PORT}`)
    })
}).catch(error => console.log('error'))

app.use("/api", web)