import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";
import 'dotenv/config';
import checkAuth from "./middlewares/checkAuth.js"

import connectDB from "./config/connectDB.js";
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoute from './routes/authRoute.js'
import userInfoRoute from './routes/userInfoRoute.js'
import coursesRoute from './routes/coursesRoute.js'
import teachersRoute from './routes/teachersRoute.js'
import eventsRoute from './routes/eventsRoute.js'
import contactRoute from './routes/contactRoute.js'

const app = express();
const PORT = process.env.PORT || 8001

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: '10000mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10000mb', extended: true, parameterLimit: 10000 }))

const finalPath = path.join(__dirname, "uploads/")
app.use('/uploads', express.static(finalPath))

app.use('/auth', authRoute)
app.use('/users', checkAuth, userInfoRoute)
app.use('/courses', coursesRoute)
app.use('/teachers', teachersRoute)
app.use('/events', eventsRoute)
app.use('/contact', contactRoute)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})