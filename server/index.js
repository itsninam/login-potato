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

  if (!firstName || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields!" });
  }

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

app.post("/login", async (req, res) => {
  const { firstName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields!" });
  }

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      if (userExists.password === password) {
        return res.status(201).json({
          message: "Password matches",
          user: userExists,
        });
      } else {
        return res.status(400).json({ message: "Password does not match" });
      }
    } else {
      return res.status(400).json({ message: "Account does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal error" });
  }
});

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
    console.log(users);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running");
});
