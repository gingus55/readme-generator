console.log("howdy planet");

// import inquirer
const inquirer = require("inquirer");

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
    name: "contributing",
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
    message: "What licenses are required in this project?",
    choices: [
        {
          name: 'Dogs',
          value: 'dog',
          short: 'D',
        },
        {
          name: 'Cats',
          value: 'cat',
          short: 'C',
        },
        {
          name: 'Snakes',
          value: 'snake',
          short: 'S',
        },
        {
          name: 'Hamsters',
          value: 'hamster',
          short: 'H',
        },
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
// get answers

// handle answers

// write README - include readme markup
// # Table of contents
// 1. [Introduction](#introduction)
// 2. [Some paragraph](#paragraph1)
//     1. [Sub paragraph](#subparagraph1)
// 3. [Another paragraph](#paragraph2)

// ## This is the introduction <a name="introduction"></a>
// Some introduction text, formatted in heading 2 style

// ## Some paragraph <a name="paragraph1"></a>
// The first paragraph text

// ### Sub paragraph <a name="subparagraph1"></a>
// This is a sub paragraph, formatted in heading 3 style

// ## Another paragraph <a name="paragraph2"></a>
// The second paragraph text

// start program
const start = async () => {
  // prompt questions and get answers
  const readmeAnswers = await inquirer.prompt(questions);

  console.log(readmeAnswers);

  // write to file with data and path
  // util.writeToFile('BIO.txt', dataToWrite);
};

start();
