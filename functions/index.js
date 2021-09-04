const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("pk_test_51IXiBdJYq7qa4kSkVI4wSVK5upYsiiGO0ShKZErEvrCuAEKsSbgtTmezOh7N160FddXy4BAg5ZVUZPogyrbsWEbj005JukzSTG")

const app = express();

app.use(cors({ origin: true }))
app.use(express.json())

app.get("/", (request, response) => res.status(200).send("hello world"))

exports.api = functions.https.onRequest(app)