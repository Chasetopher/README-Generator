const inquirer  = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
      //prompt for user to enter their github username and email
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address'
      },
      //prompt for user to input details and information about their project
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project.'
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project'
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide installation instructions for the project'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for the project'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select your project License',
        choices: ['Unlicense', 'GNU AGPLv3', 'GNU GPLv3 ', 'GNU LGPLv3 ', 'Mozilla Public License 2.0 ', 'Apache License 2.0 ', 'MIT License ', 'Boost Software License 1.0' ]
      }
  ];

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('./GenerateREADME./README.md', fileName, data), err => {
    if (err) {
      console.log(err);
      return
    } else {
      console.log('README successfully generated in the GeneratedREADME folder!');
    }
  }
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
  .then((data) => {
    writeToFile('README.md', generateMarkdown(data))
  })
}

// Function call to initialize app
init();