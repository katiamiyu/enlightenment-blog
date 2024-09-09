const express = require('express');
const app = express();
const posts = require('./routes/posts');
const connectDB = require('./db/connect');
require('dotenv').config();
const port = process.env.PORT;


// middleware
app.use(express.json());
app.use('/api/v1/posts', posts);

const startUp = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('connected to server');
    app.listen(port,() => console.log(`listening at port ${port}`)); 
  } catch (error) {
    console.log(error);
  }
}

// spinup server
startUp();