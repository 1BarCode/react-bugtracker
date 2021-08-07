import mongoose from "mongoose";

// const Schema = mongoose;

const attachmentSchema = mongoose.Schema(
  {
    file: String,
    // message: { type: String, required: true },
    // uploader: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default attachmentSchema;

// const Attachment = mongoose.model("Attachment", attachmentSchema);

// export default Attachment;
