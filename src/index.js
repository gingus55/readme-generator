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
    message: "What licenses are required in this project?",
    choices: [
      {
        name: "Dogs",
        value: "dog",
        short: "D",
      },
      {
        name: "Cats",
        value: "cat",
        short: "C",
      },
      {
        name: "Snakes",
        value: "snake",
        short: "S",
      },
      {
        name: "Hamsters",
        value: "hamster",
        short: "H",
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

#${answers.title}

## Table of contents
1. [Description](#description)
2. [User Story](#userstory)
3. [User Guidance]
    1. [Contribution Guidelines](#contribution)
    2. [Contribution Guidelines](#test)
4. [Another paragraph](#paragraph2)

### Description of application <a name="description"></a>
${answers.description}

### User Story <a name="userstory"></a>
${answers.user}

### User guidance

#### Contribution Guidelines <a name="contribution"></a>
${answers.contribution}

#### Test Instructions <a name="test"></a>
${answers.tests}

## Another paragraph <a name="paragraph2"></a>
The second paragraph text
`;

// start program
const start = async () => {
  // prompt questions and get answers
  const readmeAnswers = await inquirer.prompt(questions);

  const readmeDoc = writeReadme(readmeAnswers);

  console.log(readmeDoc);

  // write to file with data and path
  // util.writeToFile('BIO.txt', dataToWrite);
};

start();
