const express = require('express');
const app = express();
let posts = require('./models/posts');

// middleware
app.use(express.json());

app.get("/api/v1/posts", (req, res) => {
  res.json({
    status: 200,
    data: posts,
  });
});

app.get("/api/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id == id);
  res.json({
    status: 200,
    data: post,
  });
});

app.post("/api/v1/posts/", (req, res) => {
  const { id, title, body, userid, date } = req.body;
  posts.push({ id, title, body, userid, date });
  res.json({
    status: 201,
    data: posts,
  });
});

app.put("/api/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id == id);
  post.title = title || post.title;
  post.body = body || post.body;
  res.json({
    status: 201,
    data: posts,
  });
});

app.delete("/api/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id == id);
  if (post) {
    delete post;
  }
    res.json({
      status: 200,
      data: posts
    });
});

app.listen(3000,"127.0.0.1", () => {
  console.log('listening at port 3000');
});
