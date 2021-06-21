require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

const app = express();

// using body parser middleware to parse POST/PUT/PATCH request coming into express
// when incoming requrest bodies are parsed, middleware adds req.body to the req object
// app.use(bodyParser.json()); ---- or use express.json()
app.use(express.json());

// upon receiving request to /api/auth router will redirect to ./routes/authRoute
app.use("/api/auth", require("./routes/authRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
