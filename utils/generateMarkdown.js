// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'No License') {
        return ''
    } else if (license === 'GPL-3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'MPL-2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else if (license === 'Apache-2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === '') {
        return ''
    } else {
        return 'https://choosealicense.com/licenses/${data.license.toLowerCase()}/'
    }
}

//if there is a license, generate a link in TOC
function renderlicenseTOC(license) {
    if (license === 'No License') {
        return ''
    } else {
        return `* [License](#license)`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Features](#features)
* [Tests](#tests)
* [Questions](#questions)
${renderlicenseTOC()}

## Installation

${data.installation}

## Usage 

${data.usage}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

If you have any questions, you can check out my GitHub or email me directly.

GitHub: https://github.com/${data.github}

Email: ${data.email}

## License

### ${data.license} ${renderLicenseBadge(data.license)}

For more information about this license please visit ${renderLicenseLink(data.license)}.

`;
}

module.exports = generateMarkdown;