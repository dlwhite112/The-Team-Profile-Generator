class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        console.log(`The Employee's name is ${this.name}`)
    }
    getId(){
        console.log(`The Employee id is ${this.id}`)
    }
    getEmail(){
        console.log(`The Employee email is ${this.email}`)
    }
    getRole(){
        return "Employee"
    }
  
}
  module.exports = Employee;