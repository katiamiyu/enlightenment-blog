const express = require('express');
const app = express();
const posts = require('./routes/posts');

// middleware
app.use(express.json());
app.use('/api/v1/posts', posts);

app.listen(3000,"127.0.0.1", () => {
  console.log('listening at port 3000');
});
