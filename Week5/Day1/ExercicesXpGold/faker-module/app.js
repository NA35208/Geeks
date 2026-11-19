const readline = require('readline');
const { users, addFakeUsers, addUser } = require('./users');

console.log('Generating fake users:');
addFakeUsers(3);
console.log(users);

function promptUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n--- Bonus: Add user via prompt ---');
  rl.question('Enter name: ', (name) => {
    rl.question('Enter street address: ', (street) => {
      rl.question('Enter country: ', (country) => {
        addUser(name, street, country);
        console.log('\nUpdated user list:');
        console.log(users);
        rl.close();
      });
    });
  });
}

if (process.argv.includes('--prompt')) {
  promptUser();
}
