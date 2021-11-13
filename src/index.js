// import inquirer
const inquirer = require("inquirer");
const utilities = require("./utilities");
const writeReadme = require("./readme");

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
    type: "confirm",
    name: "installationIncluded",
    message: "Do I need to install your application?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do I install your application?",
    when: (answers) => answers.installationIncluded,
  },
  {
    type: "confirm",
    name: "testIncluded",
    message: "Are there tests for this application?",
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
    message: "What license is required for this project?",
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

// start program
const start = async () => {
  // prompt questions and get answers
  const readmeAnswers = await inquirer.prompt(questions);

  const readmeDoc = writeReadme(readmeAnswers);

  // write to file with data and path
  utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
