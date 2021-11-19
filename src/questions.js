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
    name: "userStory",
    message: "What is the user story of your application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are your contribution guidelines?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of your application?",
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

module.exports = {
  questions,
  installQuestions,
};
