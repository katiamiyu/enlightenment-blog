const router = require('express').Router();
const {getPosts, getPostById, updatePostById, createPost, deletePost} = require('../controllers/posts');

// get all posts
router.get("/", getPosts);

// get single post by id
router.get("/:id", getPostById);

// insert new post
router.post("/", createPost);

// update a existing post
router.put("/:id", updatePostById);

// remove post record from posts
router.delete("/:id", deletePost);

module.exports = posts;

