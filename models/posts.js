const {Schema, model} = require('mongoose');

const postSchema = new Schema({
  text: String,
  dateCreated: Date,
  dateUpdated: Date,
});

module.exports = model('Post', postSchema);


/* posts = [
  {
    id: 1,
    title: "My life",
    body: "thed  iuigu ihudo ubul i guik hs vyjmuh ukhu",
    userid: 1,
    date: "13-03-1988"
  },
  {
    id: 2,
    title: "Niga Ninga",
    body: "thed  iuigu ihudo ubul i guik hs vyjmuh ukhu",
    userid: 1,
    date: "13-08-1988"
  }
]
module.exports = posts;*/