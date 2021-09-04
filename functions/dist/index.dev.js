"use strict";

var functions = require("firebase-functions");

var express = require("express");

var cors = require("cors");

var stripe = require("stripe")("pk_test_51IXiBdJYq7qa4kSkVI4wSVK5upYsiiGO0ShKZErEvrCuAEKsSbgtTmezOh7N160FddXy4BAg5ZVUZPogyrbsWEbj005JukzSTG");

var app = express();
app.use(cors({
  origin: true
}));
app.use(express.json());
app.get("/", function (request, response) {
  return res.status(200).send("hello world");
});
exports.api = functions.https.onRequest(app);