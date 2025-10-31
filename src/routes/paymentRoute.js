const express = require("express");
const { userAuth } = require("../middlewares/auth");
const paymentRouter = express.Router();
const razorpayInstance = require("../utils/razorpay")
const Payment = require("../models/payment")

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

       const payment = new Payment({
        userId : req.user._id,
        orderId:order.id,
        status:order.status,
        amount:order.amount,
        currency:order.currency,
        receipt:order.receipt,
        notes:order.notes,

       })

       const savedPayment = await payment.save()
    

    res.json({...savedPayment.toJSON()})
  } catch (error) {
    return res.status(500).json({msg:error.message})
  }
});

module.exports = paymentRouter;
