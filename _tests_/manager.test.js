const Manager = require('../lib/manager')

describe("Manager", () => {
    it("should create a string with manager values of name, id, and email", () => {
      let newManager = new Manager(
        "DL",
        "01",
        "dlwhite112@gmail.com",
        123456789
      );
  
      expect(newManager.getName()).toBe("DL");
      expect(newManager.getId()).toBe("01");
      expect(newManager.getEmail()).toBe( "dlwhite112@gmail.com");
      expect(newManager.getRole()).toMatch("Manager")
    });
  });
  