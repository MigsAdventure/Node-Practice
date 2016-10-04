const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Whats up?> '
});

// rl.question('What do you think of Node.js?', (answer) => {
//   console.log('Thank you for your valuable feedback:', answer);
//   rl.close();
// });

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'sup':
      console.log("Nothing, I'm just wondering why you're talking to me right now");
      break;

    case 'Hello' :
      console.log('Hello to you too!');
      break;

    default: 
    console.log(`eh? What did you say?!?! Did you say '${line.trim()}' ?`);
    break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

