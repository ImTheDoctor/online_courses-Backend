import express from "express";
import bodyParser from 'body-parser'
import 'dotenv/config';
import connectDB from "./config/connectDB.js";
connectDB();

import userInfoRoute from './routes/userInfoRoute.js'
import authRoute from './routes/authRoute.js'

const app = express();
const PORT = process.env.PORT || 8001
app.use(bodyParser.json());



app.use('/users', userInfoRoute )
app.use('/auth', authRoute)


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})