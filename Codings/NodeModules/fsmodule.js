const fs = require('fs');

/* fs.writeFile('testfile.txt', 'me testing file\n',{ flag: 'a' }, (err) => {
  console.log(err);
});*/

/*fs.readFile('testfile.txt','utf8', (err, data) => {
  if (err)
    console.log(err);
  else {
    console.log(data);
  }
});*/

//using util.promisify
/* const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

async function write() {
  try {
    await writeFilePromise('testfile.txt', 'another text\n', {flag: 'a'});
    const chunk = await readFilePromise('testfile.txt', 'utf8');
    console.log(chunk);
  }
  catch (err)
  {
    console.log({catchederr: err});
  }
}
write();
*/

// using stream
const readStream = fs.createReadStream('testfile.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('test2file.txt', {flag: 'a'});

/*readStream.on('data', (chunk)=>{
  console.log(chunk);
});*/
// using pipe
readStream.pipe(writeStream);