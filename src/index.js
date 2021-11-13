// import inquirer
const inquirer = require("inquirer");
const utilities = require("./utilities");
// set questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the user story of your application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are your contribution guidelines?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do I install your application?",
  },
  {
    type: "confirm",
    name: "testIncluded",
    message: "Do you test?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do I test your application?",
    when: (answers) => answers.testIncluded,
  },
  {
    type: "list",
    name: "license",
    message: "What licenses is required for this project?",
    choices: [
      {
        name: "MIT",
        value: "mit",
      },
      {
        name: "GitHub",
        value: "github",
      },
      {
        name: "BossMan",
        value: "bossman",
      },
      {
        name: "No License Required",
        value: "none",
      },
    ],
  },
  {
    type: "input",
    name: "githubName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// write README - include readme markup

const writeReadme = (answers) => `

# ${answers.title}
![${answers.license}](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=green)

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Installation Instructions](#installation)
    2. [Test Instructions](#test)
    3. [Contribution Guidelines](#contribution)

4. [Questions](#questions)

<a id="description"></a>
### Description of application 
${answers.description}

<a id="user-story"></a>
### User Story 

${answers.usage}


<a id="guidance"></a>
### User guidance

<a id="installation"></a>
#### Installation Instructions 

${answers.installation}

<a id="test"></a>
#### Test Instructions 

${answers.tests}

<a id="contribution"></a>
#### Contribution Guidelines 

${answers.contribution}


<a id="questions"></a>
### Questions 
Should you have any questions regarding this project please reach me via email or via my GitHub using the details below:

-Email address: ${answers.email}

-GitHub username : ${answers.githubName}

`;

// start program
const start = async () => {
  // prompt questions and get answers
  const readmeAnswers = await inquirer.prompt(questions);
  console.log(readmeAnswers);

  const readmeDoc = writeReadme(readmeAnswers);

  // write to file with data and path
  utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
