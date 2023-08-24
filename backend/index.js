const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require("cors");

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect('mongodb://127.0.0.1:27017/instax');
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
};
connectToMongo();

app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("Backend is up and running");
    console.log("Backend is up and running");
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
});

const User = mongoose.model('users', UserSchema);
    
app.post("/register", async (req, resp) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    const check = await User.findOne({username: user.username});
    if(check) {
        console.log("User exists");
        resp.status(200).send("exists")
    } else {
        console.log("user doesn't exist")
        resp.status(200).send("no exists")
        user.save();
    }

    
    console.log(user);
    console.log("Created Users");
});

app.listen(5000, () => {
    console.log("App listen at port 5000");
});