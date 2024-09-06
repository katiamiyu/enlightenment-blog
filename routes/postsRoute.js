let posts = require('.././models/posts');
const postsRoute = require('express').Router();

postsRoute.get("/", (req, res) => {
  res.json({
    status: 200,
    data: posts,
  });
});

postsRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id == id);
  res.json({
    status: 200,
    data: post,
  });
});

postsRoute.post("/", (req, res) => {
  const { id, title, body, userid, date } = req.body;
  posts.push({ id, title, body, userid, date });
  res.json({
    status: 201,
    data: posts,
  });
});

postsRoute.put("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id == id);
  post.title = title || post.title;
  post.body = body || post.body;
  res.json({
    status: 201,
    data: posts,
  });
});

postsRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  const newposts = posts.filter(post=>post.id != id);
  posts = newposts;
    res.json({
      status: 200,
      data: posts
    });
});

module.exports = postsRoute;