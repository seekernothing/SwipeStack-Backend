const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 8000;
const User = require("./models/user");

app.use(express.json())

app.post("/signup", async (req, res) => {
  // creating a new instance of the User model
  console.log(req.body)
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added sucessfully");
  } catch (error) {
    res.status(400).send("Error saving the user " + error.message)
  }
});

connectDB()
  .then(() => {
    console.log("Database connection is successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed");
  });
