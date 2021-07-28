import mongoose, { Schema } from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    submitter: { type: Schema.Types.ObjectId, ref: "User" },
    assignedDevelopers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    project: { type: Schema.Types.ObjectId, ref: "Project" },
    priority: { type: String, required: true },
    status: { type: String },
    type: { type: String }, // Bugs/Error, Request
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    attachment: [attachmentSchema],
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
