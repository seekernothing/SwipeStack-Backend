const express = require("express")
const { userAuth } = require("../middlewares/auth")
const paymentRouter = express.Router()


paymentRouter.post("/payment/create",userAuth,async(req,res)=>{

    try {
        
    } catch (error) {
        
    }
})

module.exports = paymentRouter