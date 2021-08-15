// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ## Description 

    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Features](#features)
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)

    ## Installation

    ${data.installation}

    ## Usage 

    ${data.usage}

    ## Contributing

    ${data.contribute}

    ## Features

    ${data.features}

    ## Tests

    ${data.test}

    ## Questions

    If you have any questions, you can check out my GitHub or email me directly.

    GitHub: https://github.com/${data.github}

    Email: ${email}

    ## License
`;
}

module.exports = generateMarkdown;