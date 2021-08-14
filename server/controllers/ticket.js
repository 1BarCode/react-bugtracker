import mongoose from "mongoose";
import Ticket from "../models/ticket.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";
import Project from "../models/project.js";

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();

    res.status(202).json(tickets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneTicket = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const respTicket = await Ticket.findById(_id)
      .populate("assignedDevelopers")
      .populate("submitter")
      // .populate("comment")
      .exec();

    console.log(respTicket);
    res.json(respTicket);
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
    // await newTicket.save()
    const resTicket = await newTicket.save();
    // res.status(201).json(newTicket);

    // const user = await User.findByIdAndUpdate(
    //   req.userId,
    //   { $push: { tickets: newTicket } },
    //   { safe: true, upsert: true, new: true },

    const user = await User.findById(req.userId);
    user.tickets.push(resTicket);
    await user.save();

    res.status(201).json(resTicket);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTicket = async (req, res) => {
  const { id: _id } = req.params;
  const ticket = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).assignedDevelopers("No Post with that id");
  }

  try {
    // const updatedTicket = await Ticket.findByIdAndUpdate(_id, ticket, {
    //   new: true,
    // });

    const oldTicket = await Ticket.findById(_id);
    oldTicket.title = ticket.title;
    oldTicket.priority = ticket.priority;
    oldTicket.status = ticket.status;
    oldTicket.type = ticket.type;
    oldTicket.description = ticket.description;

    const updatedTicket = await oldTicket.save();

    res.status(202).json(updatedTicket);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const deleteTicket =
