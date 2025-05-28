const express = require("express");

const authRouter = express.Router();

const { validatingSignUpData } = require("../utils/validation");

const bcrypt = require("bcrypt");
const User = require("../models/user");


// Signup api

authRouter.post("/signup", async (req, res) => {
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

  const savedUser =  await user.save();
  const token = await savedUser.getJWT();
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "Lax",
  });
    res.json({message:"User Added successfully", data:savedUser});
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

// Login api

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid Credentials");

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) throw new Error("Invalid Credentials");

    const token = await user.getJWT();
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
    });
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Logut api

authRouter.post("/logout", async (req, res) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .send("Logged out");
});

module.exports = authRouter;
