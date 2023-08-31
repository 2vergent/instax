const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
const loginRoute = require("./Routes/login.route");
const signupRoute = require("./Routes/signup.route");

mongoose.connect('mongodb://127.0.0.1:27017/instax');
console.log("Connected to MongoDB");

app.use(express.json());
app.use(cors());


app.use("/login", loginRoute);
app.use("/signup", signupRoute);
    

app.listen(5000, () => {
    console.log("App listen at port 5000");
});