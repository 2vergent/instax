const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true, 
    },
    value : {
        type: String,
        required: true,
    }
});

const Post = mongoose.model('post', postSchema);

module.exports=Post;