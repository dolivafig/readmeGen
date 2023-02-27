// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: 'What was your motivation?',
//         name: 'motivation',
//     },
//     {
//         type: 'input',
//         message: 'Why did you build this project?',
//         name: 'why',
//     },
//     {
//         type: 'input',
//         message: 'What problem does it solve?',
//         name: 'problem',
//     },
//     {
//         type: 'input',
//         message: 'What did you learn?',
//         name: 'learn',
//     },
//     {
//         type: 'input',
//         message: 'What makes your project stand out?',
//         name: 'standout',
//     },
// ];

inquirer
.prompt([
    {
        type: 'input',
        message: 'Name of your project?',
        name: 'projectName',
    },  
    {
        type: 'input',
        message: 'Type your github username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'Are you working with any license?',
        name: 'license',
        choices: ['Apache v2.0', 'GNU v3.0', 'MIT License', 'BSD 2-Clause']
    },
    {
        type: 'input',
        message: 'Enter a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install the app?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed on project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Any testing instructions?',
        name: 'testing',
    }, 
    {
        type: 'input',
        message: 'Type your deployed website link.',
        name: 'link',
    },
])

.then((response) => {
fs.appendFile('README.md', `
### ${response.projectName}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
${response.description}. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${response.install}. 

## Usage

${response.usage}. 
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

<!-- ![alt text](assets/images/screenshot.png) -->


## Credits

${response.contribute}


## License

${response.license}
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Tests

${response.testing} 
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

Click [here](${response.link}) to reach the website.

## Questions

Contact developer via e-mail if you have additional questions at ${response.email}.

Developer github account: Click [here](https://github.com/${response.gitHub}) to view developers' repos.




`, (err) =>
err ? console.error(err) : console.log('Commit logged!')


)// TODO: Create a function to write README file
// fs.writeFile('README.md', JSON.stringify(data), (err) =>
// err ? console.error(err) : console.log('Success!')
// );
})

// TODO: Create a function to initialize app
// function init() {}
    


// Function call to initialize app
// init();