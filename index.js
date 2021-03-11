const inquirer = require('inquirer')
var prompt = inquirer.createPromptModule();



let engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineer-name",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "engineer-id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "engineer-email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "engineer-github",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "add",
    choices: ["Engineer", "Intern", "I dont want to add any more team members"],
  },
];
let internQuestions = [
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "intern-name",
  },
  {
    type: "input",
    message: "What is the Intern's id?",
    name: "intern-id",
  },
  {
    type: "input",
    message: "What is the Intern's email?",
    name: "intern-email",
  },
  {
    type: "input",
    message: "What is the Intern's school?",
    name: "intern-school",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "add",
    choices: ["Engineer", "Intern", "I dont want to add any more team members"],
  },
];
let managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "manager-name",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "manager-id",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "manager-email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "manager-phone",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "add",
    choices: ["Engineer", "Intern", "I dont want to add any more team members"],
  },
];

generateHtml = () => {
  console.log("this is where we will make the html");
};

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    if (answers.add === "Engineer") {
      engineer();
    }
    if (answers.add === "Intern") {
      intern();
    }
    if (answers.add === "I dont want to add any more team members") {
      generateHtml() } 
  });
}

function engineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    if (answers.add === "Engineer") {
      engineer();
    }
    if (answers.add === "Intern") {
      intern();
    } 
    if (answers.add === "I dont want to add any more team members") {
      generateHtml() }
  });
}
function intern() {
  inquirer.prompt(internQuestions).then((answers) => {
    if (answers.add === "Engineer") {
      engineer();
    }
    if (answers.add === "Intern") {
      intern();
    } 
    if (answers.add === "I dont want to add any more team members") {
      generateHtml() }
  });
}

init()