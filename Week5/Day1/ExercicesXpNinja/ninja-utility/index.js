const { Command } = require('commander');
const greetCommand = require('./commands/greet');
const fetchCommand = require('./commands/fetch');
const readCommand = require('./commands/read');

const program = new Command();

program
  .name('ninja-utility')
  .description('A versatile command-line utility')
  .version('1.0.0');

program
  .command('greet')
  .description('Display a colorful greeting message')
  .argument('[name]', 'name to greet', 'Ninja')
  .action((name) => {
    greetCommand(name);
  });

program
  .command('fetch')
  .description('Fetch and display data from an API')
  .argument('[url]', 'endpoint URL', 'https://jsonplaceholder.typicode.com/todos/1')
  .action(async (url) => {
    await fetchCommand(url);
  });

program
  .command('read')
  .description('Read and display the content of a file')
  .argument('<filepath>', 'path to the file')
  .action((filepath) => {
    readCommand(filepath);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
