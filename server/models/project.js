import mongoose from "mongoose";

const Schema = mongoose;

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: String },
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
    developers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    projectManager: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
