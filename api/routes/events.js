import express from 'express';
import { addEvent, attendEvent, deleteAttendance, deleteEvent, eventAttendees, getEvents, getLocalEvents, getMyAttending, getSingleEvent, getUserEvents, updateEvent } from '../controllers/event.js';

const router = express.Router();

router.get("/", getEvents)
router.get("/local", getLocalEvents)
router.get("/:id", getSingleEvent)
router.get("/user-events/:id", getUserEvents)
router.get("/my-events/:id", getMyAttending)
router.post("/", addEvent)
router.put("/:id", updateEvent)
router.delete("/:id", deleteEvent)
router.get("/attendees/:eventId", eventAttendees)
router.post("/attendees/:eventId", attendEvent)
router.delete("/attendees/:eventId", deleteAttendance)


export default router;