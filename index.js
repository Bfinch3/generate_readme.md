// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What was your projects title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Discribe your project.',
      },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this project used?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How can others contribute?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run the tests?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license do you choose?',
      choices: ['MIT', 'GNU General Public License v3.0', 'Apache License 2.0' ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ])

  .then((answers) => {
    fs.writeFile('results/README.md',generateMarkdown(answers),(err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
  });
