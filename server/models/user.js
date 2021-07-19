import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;
