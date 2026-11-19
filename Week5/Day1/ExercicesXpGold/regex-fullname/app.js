const readline = require('readline');
const validateFullName = require('./validateName');

const testCases = [
  'John Doe',
  'john doe',
  'John doe',
  'John  Doe',
  'John Doe 123',
  'Mary Jane Watson'
];

console.log('--- Test Cases Validation ---');
testCases.forEach((name) => {
  const isValid = validateFullName(name);
  console.log(`"${name}": ${isValid ? 'Valid' : 'Invalid'}`);
});

function promptUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nEnter your full name: ', (answer) => {
    const isValid = validateFullName(answer);
    if (isValid) {
      console.log(`"${answer}" is a valid name.`);
    } else {
      console.log(`"${answer}" is invalid. It must contain only letters, exactly one space, and each word must start with an uppercase letter.`);
    }
    rl.close();
  });
}

if (process.argv.includes('--prompt')) {
  promptUser();
}
