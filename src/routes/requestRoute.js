const express = require ("express")

const requestRouter = express.Router()

const { userAuth } = require("../middlewares/auth");

// Send request API


requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  //send connection request
  console.log("connection request sent");
  res.send("Connection request sent!");
});











module.exports = requestRouter