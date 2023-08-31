const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../Models/userLog.model")



router.post("/", async (req, resp) => {
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

module.exports = router;