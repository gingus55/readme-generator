const inquirer = require("inquirer");
const utilities = require("./utilities");
const writeReadme = require("./readme");

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

const installQuestions = [
  {
    type: "input",
    name: "step",
    message: "Enter your installation step:",
  },
  {
    type: "confirm",
    name: "continue",
    message: "Would you like to add another step?",
  },
];

const start = async () => {
  const readmeAnswers = await inquirer.prompt(questions);
  let instructionsArray = [];

  if (readmeAnswers.installationIncluded) {
    let active = true;
    while (active) {
      installationInstructions = await inquirer.prompt(installQuestions);
      if (installationInstructions.continue) {
        instructionsArray.push(installationInstructions.step);
      } else {
        instructionsArray.push(installationInstructions.step);
        active = false;
      }
    }
  }
  const readmeDoc = writeReadme(readmeAnswers, instructionsArray);

  utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
