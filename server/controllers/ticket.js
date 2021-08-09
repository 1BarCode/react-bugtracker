// import mongoose from "mongoose";
import Ticket from "../models/ticket.js";

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();

    res.status(202).json(tickets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTicket = async (req, res) => {
  const ticket = req.body;

  const newTicket = new Ticket({
    ...ticket,
    submitter: req.userId,
    assignedDevelopers: req.userId,
  });

  newTicket.attachment.push({ file: ticket.file });

  try {
    await newTicket.save();

    res.status(201).json(newTicket);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const updateTicket =
// export const deleteTicket =
