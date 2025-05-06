const express = require("express")

const profileRouter = express.Router()

const { userAuth } = require("../middlewares/auth");
const { validateProfileEditData } = require("../utils/validation");

// Profile api


profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(401).send("Invalid or expired token");
  }
});

profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{
  
  try {
    if(!validateProfileEditData(req)){
      throw new Error("invalid edit request")
    }

    const loggedInUser = req.user;
    // console.log(`Logged in user before: ${loggedInUser}`)

    Object.keys(req.body).forEach((key)=>(loggedInUser[key]= req.body[key]))
    // console.log(`Logged in user after: ${loggedInUser}`);
   await loggedInUser.save()
    
    res.json( { Message: `${loggedInUser.firstName}, your profile updated successfully`, data:loggedInUser });
  } catch (error) {
    res.status(404).send("Error :" + error.message)
  }
})













module.exports = profileRouter