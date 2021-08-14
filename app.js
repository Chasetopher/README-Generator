const inquirer  = require('inquirer');
const fs = require('fs');



  
const promptUserInfo = () => {
    return inquirer.prompt([
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
    ]);
};

  const promptProjectInfo = projectData => {
    //if theres no project data array property, create one
    if (!projectData.projects) {
      projectData.projects = [];
    }
    
    console.log(`
  ========================================
  Select which Sections you'd like to add
  ========================================
  `);
    return inquirer.prompt([
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
    ]);
  };

