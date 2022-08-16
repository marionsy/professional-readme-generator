// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What are the instructions for installation?'
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
        message: 'What are the test instructions?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ["Apache license 2.0", "ISC", "MIT", "Microsoft Public License"]
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
