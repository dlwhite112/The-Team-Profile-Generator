const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github) {
    this.github = github
    }

    getGithub(){
        console.log(`Find this Engineer on Github at ${this.github}`)
    }

    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer