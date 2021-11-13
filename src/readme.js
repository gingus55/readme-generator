const buildTitleAndBadge = (answers) => `# ${answers.title}
![${answers.license}](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=green)`;

const buildTableOfContents = (answers) => {
  if (answers.installationIncluded === true && answers.testIncluded === true) {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Installation Instructions](#installation)
    2. [Test Instructions](#test)
    3. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  }
  if (answers.installationIncluded === true && answers.testIncluded === false) {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Installation Instructions](#installation)
    2. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  }
  if (answers.installationIncluded === false && answers.testIncluded === true) {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Test Instructions](#test)
    2. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  } else {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  }
};

const buildDescription = ({ description, usage }) => `
<a id="description"></a>
### Description of application 
${description}

<a id="user-story"></a>
### User Story 

${usage}
`;

const buildGuidance = ({
  installationIncluded,
  testIncluded,
  installation,
  tests,
  contribution,
}) => {
  if (installationIncluded === true && testIncluded === true) {
    return `
<a id="guidance"></a>
### User guidance
    
<a id="installation"></a>
#### Installation Instructions 
    
    ${installation}

<a id="test"></a>
#### Test Instructions 
   
    ${tests}
    
<a id="contribution"></a>
#### Contribution Guidelines 
    
${contribution}
`;
  }
  if (installationIncluded === true && testIncluded === false) {
    return `
<a id="guidance"></a>
### User guidance
    
<a id="installation"></a>
#### Installation Instructions 
    
    ${installation}
    
<a id="contribution"></a>
#### Contribution Guidelines 
    
    ${contribution}`;
  }
  if (installationIncluded === false && testIncluded === true) {
    return `<a id="guidance"></a>
### User guidance
    
<a id="test"></a>
#### Test Instructions 
    
    ${tests}
    
<a id="contribution"></a>
#### Contribution Guidelines 
    
    ${contribution}`;
  } else {
    return `
<a id="guidance"></a>
### User guidance
    
<a id="contribution"></a>
#### Contribution Guidelines 
    
    ${contribution}
    `;
  }
};

const buildQuestions = (answers) => `
<a id="questions"></a>
### Questions 
Should you have any questions regarding this project please reach me via email or via my GitHub using the details below:

-Email address: ${answers.email}

-GitHub username : ${answers.githubName}`;

// write README - include readme markup

const writeReadme = (answers) => {
  const title = buildTitleAndBadge(answers);
  const toc = buildTableOfContents(answers);
  const desc = buildDescription(answers);
  const guide = buildGuidance(answers);
  const quest = buildQuestions(answers);

  return title + toc + desc + guide + quest;
};

module.exports = writeReadme;
