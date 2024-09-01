import express from 'express';
import Connection from './Database/db.js';
import dotenv from 'dotenv';

import defaultData from "./default.js"

const app = express();


dotenv.config();
const PORT = 8000;

const USERNAME= process.env.DB_USERNAME ;
const PASSWORD= process.env.DB_PASSWORD ;





Connection(USERNAME,PASSWORD);

app.listen(PORT, ()=>{
    console.log("server created ");
})

defaultData();