const express = require("express");
const router = express.Router();
const User = require("../Models/userLog.model")
const Post = require("../Models/post.model");

router.get("/", async (req, resp) => {
    const findUser = await User.findOne({username: req.query.username});
    resp.send(findUser._id.valueOf());
});

router.post("/", async (req, resp) => {
    const journalText = new Post({
        id: req.body.id,
        value: req.body.value
    });
    await Post.insertMany({id: journalText.id, value: journalText.value});
    resp.status(200).send("Inserted");
});

module.exports = router;