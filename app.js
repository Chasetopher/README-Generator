const inquirer  = require('inquirer');

  
  const promptProjectInfo = projectData => {
    //if theres no projects array property, create one
    if (!projectData.projects) {
      projectData.projects = [];
    }
    
    console.log(`
  ========================================
  Select which Sections you'd like to add
  ========================================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address'
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