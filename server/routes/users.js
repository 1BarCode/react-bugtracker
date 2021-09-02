import express from "express";

import { signin, signup } from "../controllers/users.js";

const router = express.Router();

// AUTH
router.post("/signin", signin);
router.post("/signup", signup);

// User

// router.get("/", getUsers);

export default router;
