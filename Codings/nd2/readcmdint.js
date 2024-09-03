const readline = require('readline');
const r2 = readline.createInterface({input: process.stdin, output: process.stdout});

r2.question('what is your name? ', (reply) => {
  if (reply.trim() == 'bayo')
    r2.close();
  else
  {
    r2.setPrompt('Incorrect, enter name again: ');
    r2.prompt();
    
    r2.on('line', (reply) => {
      if (reply.trim() == 'bayo')
        r2.close();
      else {
        r2.setPrompt('Incorrect, enter name again: ');
        r2.prompt();
      }
    });
  }
});

r2.on('close', ()=> {
  console.log('Welcome boss');
});