// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](https://img.shields.io/github/${data.license})

  ## Description

  ${data.description}

  ## Table of Contents
   
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contribution](#contribution)
   * [Test](#test)
   * [Questions](#questions)
   * [License](#license)

   ## Installation

   ${data.installation}

   ## Usage

   ${data.usage}

   ## Contribution

   ${data.contribution}

   ## Test

   ${data.test}

   ## Questions

    * View my [GitHub profile](https://github.com/${data.github})
    * For additional questions, please [send an email](mailto:${data.email})
  
   ## License

    Licensed under the ${data.license} license.

`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = generateMarkdown;
