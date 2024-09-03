const fs = require('fs');
fs.mkdir('nd2', (err) => {
  if (err)
    throw err;
  console.log('created');
})
fs.writeFile('./nd2/ex1.txt', 'gghdshjhdd', (error)=>{
  if (error) throw error;
  console.log('wriiten');
  fs.readdir('./nd2', (err, file) => console.log(file));
  fs.readFile('./nd2/ex1.txt', 'utf8',(err, data) => {
  if (err) throw err;
  console.log(data);
})
} )