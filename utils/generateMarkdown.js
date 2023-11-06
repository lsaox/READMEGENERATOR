// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "NONE"){
    return`<img src="https://img.shields.io/badge/license-${license}-blue.svg"/>`
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "NONE"){
    return `* [License](#license)`
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "NONE"){
    return `## License
    
    This project is Licensed under ${license}`
  }else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Question](#question)
  
  ## Installation

  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

    If you have any questions you can contact me at <a [${data.email}](mailto:${data.email}) a>.
    Feel free to go on to my github <a [${data.github}](https://github.com/${data.github}) a> to see my other projects.

`;
}

module.exports = generateMarkdown;
