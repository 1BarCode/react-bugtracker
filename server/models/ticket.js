import mongoose from "mongoose";
import attachmentSchema from "./attachment.js";

const Schema = mongoose;

const ticketSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    // project: { type: Schema.Types.ObjectId, ref: "Project" },
    priority: { type: String, required: true },
    status: { type: String },
    type: { type: String }, // Bugs/Error, Request
    description: { type: String, required: true },
    attachment: [attachmentSchema],
    submitter: { type: Schema.Types.ObjectId, ref: "User" },
    assignedDevelopers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
