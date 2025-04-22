const express = require("express");
const app = express();
const PORT = 8000;
const { adminAuth,userAuth } = require("./middlewares/auth");

app.use("/admin",adminAuth);

app.get("/user",userAuth, (req, res) => {
  res.send("Sent the user data");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted the user");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
