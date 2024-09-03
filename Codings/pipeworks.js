const fs = require('fs');

const writeStream = fs.createWriteStream('./nd2/ex2.txt');

const readStream = fs.createReadStream('./nd2/ex1.txt', 'utf8');
/* readStream.on('data', (chunk) => {
  console.log(chunk);
})
readStream.on('end', () => {
  console.log('data has been read');
})
readStream.on('error', (err) => {
  console.log(err);
})*/

/*writeStream.write('jagbajantiases');
writeStream.on('end', ()=>{
  console.log('i don write finish');
})*/
readStream.pipe(writeStream);
readStream.on('end', ()=>console.log('end'));
