import mongoose, { Schema } from "mongoose";

const commentSchema = mongoose.Schema({
  message: { type: String, required: true },
  commenter: { type: Schema.Types.ObjectId, ref: "User" },
  timestamps: true,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
