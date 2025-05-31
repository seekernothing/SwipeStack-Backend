const socket = require("socket.io");
const crypto = require("crypto");
const { Chat } = require("../models/chat");
const User = require("../models/user");
const connectionRequest = require("../models/connectionRequest");
const getSecretRoomId = (userId, targetUserId) => {
  return crypto
    .createHash("sha256")
    .update([userId, targetUserId].sort().join("_"))
    .digest("hex");
};

const initializeSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: ["http://localhost:5173", "http://13.203.205.52"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinChat", ({ firstName, userId, targetUserId }) => {
      const roomId = getSecretRoomId(userId, targetUserId);
      console.log(`${firstName} joined the room: ${roomId}`);
      socket.join(roomId);
    });

    socket.on(
      "sendMessage",
      async ({ firstName, userId, targetUserId, text }) => {
       


        try {

          const roomId = getSecretRoomId(userId, targetUserId);
          console.log(`${firstName}: ${text}`);

          
          let chat = await Chat.findOne({
            participants: { $all: [userId, targetUserId] },
          });



          if (!chat) {
            chat = new Chat({
              participants: [userId, targetUserId],
              messages: [],
            });
          }

          chat.messages.push({
            senderId: userId,
            text,
          });

          await chat.save();

          // Get sender's photo URL
          const sender = await User.findById(userId).select("photoUrl");

          const messagePayload = {
            firstName,
            text,
            userId,
            photoUrl: sender?.photoUrl || null,
          };

          // ✅ Emit to all users in the room
          io.to(roomId).emit("messageReceived", messagePayload);
        } catch (error) {
          console.error("Socket sendMessage error:", error.message);
        }
      }
    );

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

module.exports = initializeSocket;
