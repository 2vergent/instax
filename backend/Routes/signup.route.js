const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../Models/userLog.model")



router.post("/", async (req, resp) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    const findUser = await User.findOne({username: user.username});
    if(findUser) {
        resp.status(200).send("NotUnique");
    } else {
        const hashedPass = await bcrypt.hash(user.password, 8);
        User.insertMany({name: user.name, username: user.username, password: hashedPass});
        resp.status(200).send("Inserted");
    }
})


module.exports = router;