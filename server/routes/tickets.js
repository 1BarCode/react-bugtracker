import express from "express";
import {
  getTickets,
  createTicket,
  //   updateTicket,
  //   deleteTicket,
} from "../controllers/ticket.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getTickets);
// router.get("/:id", getTickets);
router.post("/", auth, createTicket);
// router.patch("/:id", auth, updateTicket);
// router.delete("/:id", auth, deleteTicket);

export default router;
