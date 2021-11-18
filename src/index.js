const inquirer = require("inquirer");
const utilities = require("./utilities");
const writeReadme = require("./readme");
const { questions, installQuestions } = require("./questions");

const start = async () => {
  const readmeAnswers = await inquirer.prompt(questions);
  const instructionsArray = [];

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

  const readmeDoc = writeReadme({ readmeAnswers, instructionsArray });

  utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
