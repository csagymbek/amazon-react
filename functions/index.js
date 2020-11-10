const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hl0HeHYvKrbaiG4jfHfA24aNVuVjElYJRHWKutyemsvwMFWucVWCtfAWRspdCo8s6CV1k0fQrhu5qMksM6Q0lbV00oLM2uK13"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //amount in subunits
  console.log("Payment request received: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/react-f55d1/us-central1/api
