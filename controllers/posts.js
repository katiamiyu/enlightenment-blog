const Post = require('../models/posts');

const getAllPosts = async (req, res) => {
  try {
    const data = await Post.find();
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const getPostById = async (req, res) => {
  try {
    const {id: postId} = req.params;
    const data = await Post.findById(postId);
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const createPost =  async (req, res) => {
    try {
      const {text} = req.body;
      const newDate = new Date().toLocaleString();
      const data = await Post.create({text, dateCreated: newDate, dateUpdated: newDate});
      res.status(201).json({data});
    } catch (error) {
      res.status(500).json({msg: error});
    }
  };

  const updatePostById = async (req, res) => {
    try {
      const {text} = req.body;
      const updatedDate = new Date().toLocaleString();
      const {id: postId} = req.params;
      const data = await Post.findByIdAndUpdate(postId, {text: text, dateUpdated: updatedDate});
      res.status(201).json({data});
    } catch (error) {
      res.status(500).json({msg: error});
    }
  }

module.exports = {getAllPosts, getPostById, createPost, updatePostById};