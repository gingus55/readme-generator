const inquirer = require("inquirer");
const utilities = require("./utilities");
const writeReadme = require("./readme");
const { questions, installQuestions, testQuestions } = require("./questions");

const start = async () => {
  const readmeAnswers = await inquirer.prompt(questions);
  const instructionsArray = [];
  const testArray = [];

  if (readmeAnswers.installationIncluded) {
    let active = true;
    while (active) {
      const installationInstructions = await inquirer.prompt(installQuestions);
      instructionsArray.push(installationInstructions.step);
      if (!installationInstructions.continue) {
        active = false;
      }
    }
  }

  if (readmeAnswers.testIncluded) {
    let active = true;
    while (active) {
      const testInstructions = await inquirer.prompt(testQuestions);
      testArray.push(testInstructions.step);
      if (!testInstructions.continue) {
        active = false;
      }
    }
  }

  const readmeDoc = writeReadme({
    readmeAnswers,
    instructionsArray,
    testArray,
  });

  utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
