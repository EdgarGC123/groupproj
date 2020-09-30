//dependencies
const express = require("express")
const mongoose = require("mongoose")

//configuration
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json())
app.use(express.static("public"))

//controllers


//connection