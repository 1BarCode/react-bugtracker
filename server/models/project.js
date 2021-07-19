import mongoose, { Schema } from "mongoose";

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String },
  timestamps: true,
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  developers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  projectManager: { type: Schema.Types.ObjectId, ref: "User" },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
