const Intern = require('../lib/intern')

describe("Employee", () => {
    it("should create a string with intern values of name, id, and email", () => {
      let newIntern = new Intern(
        "DL",
        "01",
        "dlwhite112@gmail.com",
        "University of Texas at Austin"
      );
  
      expect(newIntern.getName()).toBe("DL");
      expect(newIntern.getId()).toBe("01");
      expect(newIntern.getEmail()).toBe( "dlwhite112@gmail.com");
      expect(newIntern.getSchool()).toMatch("University of Texas at Austin")
      expect(newIntern.getRole()).toMatch("Intern")
    });
  });
  