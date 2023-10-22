// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If a license is provided, return a badge based on the license type
  if (license) {
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${encodeURIComponent(license)})`;
  }
  return '';
}
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

For any questions, please contact me via:

- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

