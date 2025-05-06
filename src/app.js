const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/database");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { validatingSignUpData } = require("./utils/validation");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

// 🟢 Signup API
app.post("/signup", async (req, res) => {
  try {
    validatingSignUpData(req);
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

// 🟢 Login API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid Credentials");

    const isPasswordValid = await user.validatePassword;(password)
    if (!isPasswordValid) throw new Error("Invalid Credentials");

    const token = await user.getJWT()
    res.cookie("token", token);
    res.send("Login Successful!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// 🟢 Profile API
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(401).send("Invalid or expired token");
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  //send connection request
  console.log("connection request sent");
  res.send("Connection request sent!");
});

// 🟢 Start Server
connectDB()
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });




