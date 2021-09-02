import express from "express";

import { signin, signup } from "../controllers/users.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

// AUTH
router.post("/signin", signin);
router.post("/signup", signup);

// User

// router.get("/", auth, getUsers);

export default router;
