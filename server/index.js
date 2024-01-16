const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./models/Users");

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://madalinaoancea:pass123@cluster0.xzaimc3.mongodb.net/login?retryWrites=true&w=majority"
);

app.post("/signup", async (req, res) => {
  const { firstName, email, password } = req.body;

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = new UserModel({ firstName, email, password });
      await newUser.save();
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal error" });
  }
});

app.listen(3001, () => {
  console.log("Server running");
});
