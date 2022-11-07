import express from "express";
import bodyParser from 'body-parser'
import 'dotenv/config';
import connectDB from "./config/connectDB.js";
connectDB();

import userInfoRoute from './routes/userInfoRoute.js'

const app = express();
const PORT = process.env.PORT
app.use(bodyParser.json());

app.use('/users', userInfoRoute )






app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})