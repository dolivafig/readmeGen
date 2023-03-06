const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['Apache', 'EPL', 'MIT', 'BSD']
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

    // console.log(response.license)
let badge;
    if (response.license == 'Apache') {
        badge = 'https://img.shields.io/aur/license/android-studio';
    } else if(response.license == 'MIT') {
        badge = "https://img.shields.io/bower/l/readme";
    } else if(response.license == 'BSD') {
        badge = "https://img.shields.io/aur/license/a";
    } else {
        badge = "https://img.shields.io/eclipse-marketplace/l/notepad4e";
    } 

fs.writeFile('README.md', `
![badge](${badge})

### ${response.projectName}

## Description

${response.description} 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${response.install}

## Usage

${response.usage}
For a quick video on how to use the application click [here](https://drive.google.com/file/d/1OCFlp3xXUe4oe6U_pfeiw2Rt8BylLOuL/view)

## Credits

${response.contribute}

## License

The following repository is protected under the: ${response.license} license.

## Tests

${response.testing} 

Click [here](${response.link}) to reach the website.

## Questions

Contact developer via e-mail if you have additional questions at ${response.email}

Developer github account: Click [here](https://github.com/${response.gitHub}) to view developers' repos.




`, (err) =>
err ? console.error(err) : console.log('Commit logged!')


)// TODO: Create a function to write README file

})

// TODO: Create a function to initialize app
// function init() {}
    


// Function call to initialize app
// init();