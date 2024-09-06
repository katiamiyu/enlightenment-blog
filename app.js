const express = require('express');
const app = express();
let posts = require('./models/posts');

// middleware
app.use(express.json());

app.get("/api/v1/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000,"127.0.0.1", () => {
  console.log('listening at port 3000');
});
