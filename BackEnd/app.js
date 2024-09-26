const express = require("express");
const instr = require("./models/instrumentModel")
 userRoutes = require("./routes/userRoutes")

const app = express();

var cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))


app.use("/",userRoutes);

module.exports =app;