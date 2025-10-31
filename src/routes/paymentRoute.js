const express = require("express");
const { userAuth } = require("../middlewares/auth");
const paymentRouter = express.Router();
const razorpayInstance = require("../utils/razorpay")

paymentRouter.post("/payment/create", userAuth, async (req, res) => {
  try {
    const order = await razorpayInstance.orders.create({
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
      partial_payment: false,
      notes: {
        firstName: "value3",
        lastName: "value2",
        membershipType: "silver",
      },
      
    });

  
    

    res.json({order})
  } catch (error) {
    return res.status(500).json({msg:error.message})
  }
});

module.exports = paymentRouter;
