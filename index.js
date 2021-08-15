const inquirer  = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
      //prompt for user to enter their github username and email
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username: '
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address: '
      },
      //prompt for user to input details and information about their project
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project: '
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project: '
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project: '
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide installation instructions for the project: '
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use: '
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter guidelines for contributions: '
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for the project: '
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select your project License',
        choices: ['No License', 'GPL-3.0', 'MPL-2.0', 'Apache-2.0', 'MIT']
      }
  ];

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', (fileName, data), err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README.md successfully created!'
      });
    });
  });
};

// TODO: Create a function to initialize app

function init() {
  return new Promise(async (resolve, reject) => {
    const data = await inquirer.prompt(questions);
    writeToFile('README.md', generateMarkdown(data));
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
};

// Function call to initialize app
init();