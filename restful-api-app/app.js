require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware agar req.body (JSON) dapat dibaca
app.use(cors ({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET','POST']
}));

app.use(express,json());

module.exports = app;