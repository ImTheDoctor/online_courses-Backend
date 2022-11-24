import express from "express";
const router = express.Router()
import { getEvents, getEvent, createEvent, deleteEvent, updateEvent } from '../controllers/eventsController.js'
import checkAuth from "../middlewares/checkAuth.js";

router.get('/', getEvents)

router.get('/:id', getEvent)

router.post('/', checkAuth, createEvent)

router.delete('/:id', checkAuth, deleteEvent)

router.patch('/:id', checkAuth, updateEvent)

export default router