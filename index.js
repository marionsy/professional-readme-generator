// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'What is the description of your project?'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What command should be run to install dependencies?'
    },
    {
        name: 'usage',
        type: 'input',
        message: "What is the usage information?"
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'What are the contribution guidelines?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'What command should be run to run tests?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Which license would you like your project to have?',
        choices: ["Apache license 2.0", "ISC", "MIT", "GNU GPL v3"]
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README file created successfully!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
