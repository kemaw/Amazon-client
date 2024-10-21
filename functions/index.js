const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

setGlobalOptions({ maxInstances: 10 });
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    // console.log("payment received", total);
    const paymentIntent = await stripe.PaymentIntents.create({
      amount: total,
      currency: "usd",
      // payment_method_types: ["card"],
    });
    console.log(paymentIntent);

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } else {
    res.status(403).json({ error: "Invalid total amount" });
  }
});

exports.api = onRequest(app);
