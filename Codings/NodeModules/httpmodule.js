const http = require('http');
const fs = require('fs');
const readHtmlStream = fs.readFileSync('./rps.html');
const readcssStream = fs.readFileSync('./style.css');
const readjsStream = fs.readFileSync('./app.js');

const app = http.createServer((req, res)=>{
  if (req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(readHtmlStream);
    res.end();
  }
  else if (req.url === '/style.css'){
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(readcssStream);
    res.end();
  }
  else if (req.url === '/app.js'){
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(readjsStream);
    res.end();
  }
});

app.listen(5000, ()=>{
  console.log('server active at port 5000');
});