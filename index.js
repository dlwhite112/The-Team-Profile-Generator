const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const markdown = require("./src/markdown");

markdown.allCards = [];

// const teamArr = [];
// const idArr = [];

let engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "engineerGithub",
  },
];
let internQuestions = [
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the Intern's id?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is the Intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the Intern's school?",
    name: "internSchool",
  },
];
let managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "managerPhone",
  },
];

let teamQuestion = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "addChoice",
    choices: ["Engineer", "Intern", "I dont want to add any more team members"],
  },
];

generateHtml = () => {
  fs.writeFileSync("index.html", markdown.markdownHtml(markdown.allCards.join("")));

  console.log("this is where we will make the html");
};

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerPhone
    );
    markdown.allCards.push(markdown.managerCard(manager));
    addEmployee();
  });
}

addEmployee = () => {
  inquirer.prompt(teamQuestion).then((answers) => {
    switch (answers.addChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        generateHtml();
    }
  });
};

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    markdown.allCards.push(markdown.engineerCard(engineer));
    addEmployee();
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    markdown.allCards.push(markdown.internCard(intern));
    addEmployee();
  });
}

init();