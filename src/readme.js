const buildTitleAndBadge = ({ title, license }) => `# ${title}
![${license}](https://img.shields.io/static/v1?label=${license}&message=License&color=green)`;

const buildTableOfContents = ({ installationIncluded, testIncluded }) => {
  if (installationIncluded && testIncluded) {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Usage](#usage)
    1. [Installation Instructions](#installation)
    2. [Test Instructions](#test)
    3. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  }
  if (installationIncluded && !testIncluded) {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Usage](#usage)
    1. [Installation Instructions](#installation)
    2. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  }
  if (!installationIncluded && testIncluded) {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
3. [User Guidance](#guidance)
    1. [Usage](#usage)
    1. [Test Instructions](#test)
    2. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  } else {
    return `

## Table of contents
1. [Description](#description)
2. [User Story](#user-story)
    1. [Usage](#usage)
    3. [User Guidance](#guidance)
    1. [Contribution Guidelines](#contribution)
4. [Questions](#questions)

`;
  }
};

const buildDescription = ({ description, userStory }) => `
<a id="description"></a>
### Description of application 
${description}

<a id="user-story"></a>
### User Story 

${userStory}
`;

const buildInstructionsList = (instructionsArray) => {
  const list = instructionsArray.join("\n -");
  return ` -${list}`;
};

const buildGuidance = (
  { installationIncluded, testIncluded, tests, usage, contribution },
  instructionsArray
) => {
  const instruct = buildInstructionsList(instructionsArray);
  if (installationIncluded && testIncluded) {
    return `
<a id="guidance"></a>
### User guidance

<a id="usage"></a>
#### App Usage

    ${usage}

<a id="installation"></a>
#### Installation Instructions 

\`\`\`    
${instruct}
\`\`\`

<a id="test"></a>
#### Test Instructions 
   
    ${tests}
    
<a id="contribution"></a>
#### Contribution Guidelines 
    
${contribution}
`;
  }
  if (installationIncluded && !testIncluded) {
    return `
<a id="guidance"></a>
### User guidance

<a id="usage"></a>
#### App Usage

  ${usage}

<a id="installation"></a>
#### Installation Instructions 

\`\`\`    
${instruct}
\`\`\`

<a id="contribution"></a>
#### Contribution Guidelines 
    
    ${contribution}`;
  }
  if (!installationIncluded && testIncluded) {
    return `<a id="guidance"></a>
### User guidance

<a id="usage"></a>
#### App Usage

    ${usage}

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

<a id="usage"></a>
#### App Usage

    ${usage}


<a id="contribution"></a>
#### Contribution Guidelines 
    
    ${contribution}
    `;
  }
};

const buildQuestions = ({ email, githubName }) => `
<a id="questions"></a>
### Questions 
Should you have any questions regarding this project please reach me via email or via my GitHub using the details below:

-Email address: ${email}

-GitHub username : ${githubName}`;

// write README - include readme markup

const writeReadme = ({ readmeAnswers: answers, instructionsArray }) =>
  buildTitleAndBadge(answers) +
  buildTableOfContents(answers) +
  buildDescription(answers) +
  buildGuidance(answers, instructionsArray) +
  buildQuestions(answers);

module.exports = writeReadme;
