const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    
    //Read the token from req cookies
    
    const { token } = req.cookies;
    if(!token){
      throw new Error("Token is not valid");
    }
    
    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);
   
    const {_id} = decodedObj;
    const user = await User.findById(_id);
    if (!User) {
      throw new Error("User not found");
    }
    req.user = user
    next();
    //validate the token
    //find the user
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
};

module.exports = {
  userAuth,
};







