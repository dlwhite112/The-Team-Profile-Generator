const Employee = require('./employee')

class Intern extends Employee{
    constructor(school){
        this.school = school

    }
    getSchool(){
        console.log(`This Intern is a student at ${this.school}`)
    }
    getRole(){
        return "Intern"
    }
}
    
module.exports = Intern