const mongoose = require('mongoose');
const express = require('express');
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


app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
    console.log("Working");
});
    
app.post("/register", (req, resp) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save();
    console.log(user);
    resp.send(user);
    console.log("Created Users");   
});
 

app.listen(5000, () => {
    console.log("App listen at port 5000");
});

module.exports = connectToMongo;