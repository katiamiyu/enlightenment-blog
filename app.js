const express = require('express');
const app = express();
const postRoute = require('./routes/postsRoute');

// middleware
app.use(express.json());
app.use('/api/v1/posts', postRoute);

app.listen(3000,"127.0.0.1", () => {
  console.log('listening at port 3000');
});
