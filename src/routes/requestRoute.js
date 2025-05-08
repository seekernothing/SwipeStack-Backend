const express = require("express");

const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const connectionRequestModel = require("../models/connectionRequest");
const User = require("../models/user");

// Send request API

//send connection request

requestRouter.post(
  "/request/send/:status/:touserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.touserId;
      const status = req.params.status;

      // validation ---> only check for interested & ignored only

      const allowedStatus = ["ignored", "interested"];
      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: "Invalid status type:" + status });
      }

      

      //check if the connection sending person exists in database or not

      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(404).json({ Message: "User not found" });
      }

      //checking if there is an existing connection request  ( means if you have sent connection request , you can not send another reuest to that user again)

      const existingConnectionRequest = await connectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (existingConnectionRequest) {
        return res
          .status(400)
          .send({ message: "Connection request already exists!!" });
      }

      const connectionRequest = new connectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({
        message: "Connection request sent successfully",
        data,
      });
    } catch (error) {
      res.status(404).send("Error: " + error.message);
    }
  }
);

module.exports = requestRouter;
