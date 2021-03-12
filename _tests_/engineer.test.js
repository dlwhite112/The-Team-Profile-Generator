const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    it("should create a string with Engineer values of name, id, and email", () => {
      let newEngineer = new Engineer(
        "DL",
        "01",
        "dlwhite112@gmail.com",
        "dlwhite112"
      );
  
      expect(newEngineer.getName()).toBe("DL");
      expect(newEngineer.getId()).toBe("01");
      expect(newEngineer.getEmail()).toBe("dlwhite112@gmail.com");
      expect(newEngineer.getRole()).toBe("Engineer")
      expect(newEngineer.getGithub()).toMatch("dlwhite112")
    });
  });