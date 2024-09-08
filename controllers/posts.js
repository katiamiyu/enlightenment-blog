let data = require('../models/posts');

const posts = {
  getPosts: (req, res) => {
    res.json({
      status: 200,
      data: data,
    });
  },
  getPostById: (req, res) => {
    const { id } = req.params;
    const post = data.find((post) => post.id == id);
    res.json({
      status: 200,
      data: post,
    });
  },
  createPost: (req, res) => {
    const { id, title, body, userid, date } = req.body;
    data.push({ id, title, body, userid, date });
    res.json({
      status: 201,
      data: data,
    });
  },
  updatePostById: (req, res) => {
    const { id } = req.params;
    const post = data.find(post => post.id == id);
    post.title = title || post.title;
    post.body = body || post.body;
    res.json({
      status: 201,
      data: data,
    });
  },
  deletePost: (req, res) => {
    const { id } = req.params;
    const newposts = data.filter(post=>post.id != id);
    data = newposts;
      res.json({
        status: 200,
        data: data
      });
  }
}

module.exports = posts;