import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config';
import checkAuth from "./middlewares/checkAuth.js"
import connectDB from "./config/connectDB.js";
connectDB();

import authRoute from './routes/authRoute.js'
import userInfoRoute from './routes/userInfoRoute.js'
import coursesRoute from './routes/coursesRoute.js'
import teachersRoute from './routes/teachersRoute.js'
import eventsRoute from './routes/eventsRoute.js'

const app = express();
const PORT = process.env.PORT || 8001
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute)
app.use('/users', checkAuth, userInfoRoute)
app.use('/courses', coursesRoute)
app.use('/teachers', teachersRoute)
app.use('/events', eventsRoute)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})