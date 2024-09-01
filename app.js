const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(res);
  res.send('<h1>Hello world</h1>');
})

app.listen(3000, () => {
  console.log('listening at port 3000');
})