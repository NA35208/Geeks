const chalk = require('chalk');

function greet(name = 'Ninja Developer') {
  console.log(chalk.bold.hex('#FFA500')('=============================='));
  console.log(chalk.bold.green(`  Welcome to Ninja Utility, ${name}! `));
  console.log(chalk.cyan('  Command executed with style!'));
  console.log(chalk.bold.hex('#FFA500')('=============================='));
}

module.exports = greet;
