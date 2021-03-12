const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should create a string with employee values of name, id, and email", () => {
    let newEmployee = new Employee(
      "DL",
      "01",
      "dlwhite112@gmail.com"
    );

    expect(newEmployee.getName()).toBe("DL");
    expect(newEmployee.getId()).toBe("01");
    expect(newEmployee.getEmail()).toBe( "dlwhite112@gmail.com");
    expect(newEmployee.getRole()).toMatch("Employee")
  });
});

