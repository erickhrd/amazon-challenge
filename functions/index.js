const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_8zYZSvCPCK56iwsDlKqulEjq')

//API

//App config
const app= express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API
app.get('/', (resquest, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for the amount of >>>', total )

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen commad
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-8399f/us-central1/api