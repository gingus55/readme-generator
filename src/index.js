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
    name: "tests",
    message: "How do I test your application?",
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
![${answers.license}]https://img.shields.io/static/v1?label=${answers.license}&message=License&color=green

## Table of contents
1. [Description](#description)
2. [User Story](#userstory)
3. User Guidance
    1. [Contribution Guidelines](#contribution)
    2. [Test Instructions](#test)
4. [Questions](#questions)

<a name="description"></a>
### Description of application 
${answers.description}

<a name="userstory"></a>
### User Story 
${answers.user}

### User guidance
<a name="contribution"></a>
#### Contribution Guidelines 
${answers.contribution}
<a name="test"></a>
#### Test Instructions 
${answers.tests}

<a name="questions"></a>
### Questions 
Should you have any questions regarding this project please reach me via email or via my GitHub using the details below:

-Email address: ${answers.email}

-GitHub username : ${answers.githubName}
`;

// start program
const start = async () => {
  // prompt questions and get answers
  const readmeAnswers = await inquirer.prompt(questions);

  const readmeDoc = writeReadme(readmeAnswers);

  //   console.log(readmeDoc);

  // write to file with data and path
  utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
