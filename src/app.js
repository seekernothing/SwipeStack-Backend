const express = require("express");
const app = express();
const PORT = 8000;
const connectDB = require("./config/database");
const User = require("./models/user");
const user = require("./models/user");

app.use(express.json());

// Signup api  🔴( data sanitization needed in post and patch apis)
app.post("/signup", async (req, res) => {
  // creating a new instance of the User model
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added sucessfully");
  } catch (error) {
    res.status(400).send("Error saving the user " + error.message);
  }
});

//Feed api - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const users = await User.find({ email: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    }
    res.send(users);
  } catch (error) {
    res.status(401).send("Something went wrong");
  }
});

// api to delete user by id

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    // const user = await User.findByIdAndDelete({_id: userId})
    const user = await User.findByIdAndDelete(userId); // this one is shorthand for upper-one
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// api to update the data of the user 🔴( data sanitization needed in post and patch apis)
app.patch("/user/:userId", async (req, res) => {
  const data = req.body;
  const userId = req.params?.userId;

  

  try {


    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age","userId","skills"];

  const isUpdateAllowed = Object.keys(data).every((k) =>
    ALLOWED_UPDATES.includes(k)
  );

  if(!isUpdateAllowed){
    throw new Error("Update is not allowed")
  }

  if(data.skills.length>10){
    throw new Error("Maximum 10 skills are allowed")
  }


    await User.findOneAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("Update failed :" + error.message);
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
