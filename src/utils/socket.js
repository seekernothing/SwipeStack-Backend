const socket = require("socket.io");

const initalizeSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    // Handel events

    socket.on("joinChat",()=>{})


    socket.on("sendMessage",()=>{})


    socket.on("disconnect",()=>{})
  });
};

module.exports = initalizeSocket;
