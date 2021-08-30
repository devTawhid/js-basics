const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Are you Tawhid?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });


const prompt = require('prompt-sync')();
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);