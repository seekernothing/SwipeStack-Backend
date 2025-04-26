const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requires: true,
      minLength: 2,
      maxLength: 20,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      requires: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address : " + value);
        }
      },
    },
    password: {
      type: String,
      requires: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error(
            "Enter a strong password (should contain minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1) : " +
              value
          );
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender is invalid");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://static.thenounproject.com/png/3424293-200.png",
    },
    about: {
      type: String,
      default:
        "Seek within my friends you only need you. embrace every aspect of life. be empathatic and good to every person . all of us are stuck in this simulation and our time is limted this thing only make you realize that we should help each other and respectful towards each other ",
    },
    skills: {
      type: [String, String],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getJWT = async function () {
  const user = this
  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return token
};


userSchema.methods.validatePassword = async function(passwordInputByUser){
  const user = this;
  const passwordHash = user.password
  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );
}

module.exports = mongoose.model("User", userSchema);
