const express = require("express")

const profileRouter = express.Router()

const { userAuth } = require("../middlewares/auth");

// Profile api


profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(401).send("Invalid or expired token");
  }
});













module.exports = profileRouter