const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");

mongoose.connect('mongodb://127.0.0.1:27017/instax');
console.log("Connected to Mongo Successfully!");



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
    
app.post("/login", async (req, resp) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    const findUser = await User.findOne({username: user.username});
    if(findUser) {
        if (bcrypt.compare(user.password, findUser.password)) {
            console.log("User is verified")
            resp.status(200).send("exists")
        }
        else {
            console.log("Wrong password")
        }
    } else {
        console.log("user doesn't exist");
        resp.status(200).send("no exists");
    }
});

app.post("/signup", async (req, resp) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    const findUser = await User.findOne({username: user.username});
    if(findUser) {
        resp.status(200).send("NotUnique");
    } else {
        const hashedPass = await bcrypt.hash(user.password, 8);
        User.insertMany({username: user.username, password: hashedPass});
        resp.status(200).send("Inserted");
    }
})

app.listen(5000, () => {
    console.log("App listen at port 5000");
});