const express = require("express");
const { Chat } = require("../models/chat");
const { userAuth } = require("../middlewares/auth");

const chatRouter = express.Router();

// ✅ GET /chat/:targetUserId - returns chat messages with sender details
chatRouter.get("/chat/:targetUserId", userAuth, async (req, res) => {
  const { targetUserId } = req.params;
  const userId = req.user._id;

  try {
    // ✅ Find chat and populate sender info
    let chat = await Chat.findOne({
      participants: { $all: [userId, targetUserId] },
    }).populate({
      path: "messages.senderId",
      select: "firstName photoUrl", // ✅ send photoUrl too
    });

    // ✅ If no chat found, create a new empty one
    if (!chat) {
      chat = new Chat({
        participants: [userId, targetUserId],
        messages: [],
      });
      await chat.save();
    }

    // ✅ Send only messages array (frontend expects this)
    res.status(200).json({ messages: chat.messages });
  } catch (error) {
    console.error("Error in GET /chat:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = chatRouter;
