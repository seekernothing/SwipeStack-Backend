const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const profileRouter = require("./routes/profileRoute");
const requestRouter = require("./routes/requestRoute");
const userRouter = require("./routes/userRoute");
const cors = require("cors");


require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// 🟢 Signup API

// 🟢 Login API

// 🟢 Profile API

// send request API

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// 🟢 Start Server
connectDB()
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });
