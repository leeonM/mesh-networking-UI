import express from 'express';
import { getUser, updateUser } from '../controllers/user.js';

const router = express.Router();

// router.get("/", getUsers)
router.get("/:id", getUser)
router.put("/:id", updateUser)


export default router;