const posts = require('express').Router();
const {getPosts, getPostById, updatePostById, putPost, deletePost} = require('../controllers/posts');

// get all posts
posts.get("/", getPosts);

// get single post by id
posts.get("/:id", getPostById);

// insert new post
posts.post("/", putPost);

// update a existing post
posts.put("/:id", updatePostById);

// remove post record from posts
posts.delete("/:id", deletePost);

module.exports = posts;

