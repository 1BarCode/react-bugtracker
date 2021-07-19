import mongoose, { Schema } from "mongoose";

const attachmentSchema = mongoose.Schema({
  file: String,
  message: { type: String, required: true },
  uploader: { type: Schema.Types.ObjectId, ref: "User" },
  timestamps: true,
});

const Attachment = mongoose.model("Attachment", attachmentSchema);

export default Attachment;
