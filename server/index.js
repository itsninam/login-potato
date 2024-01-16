const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://madalinaoancea:pass123@cluster0.xzaimc3.mongodb.net/login?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("Server running");
});
