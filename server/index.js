import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import ticketRoutes from "./routes/tickets.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/tickets", ticketRoutes);

app.use("/", (req, res) => {
  res.send("Hello World. You've reached the bug_tracker API.");
});

const PORT = (process.env.PORT = 5001);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));
