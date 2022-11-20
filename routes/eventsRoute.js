import express from "express";
const router = express.Router()
import {getEvents, getEvent, createEvent, deleteEvent, updateEvent} from '../controllers/eventsController.js'

router.get('/', getEvents)

router.get('/:id', getEvent)

router.post('/', createEvent)

router.delete('/:id', deleteEvent)

router.patch('/:id', updateEvent)

export default router