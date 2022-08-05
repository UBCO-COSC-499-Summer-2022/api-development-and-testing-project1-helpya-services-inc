const ROLE = {
    ADMIN: "admin",
    CONSUMER: "consumer",
    BUSINESS: "business",
    HELPYA: "helpya",
  };
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: "Bob", role: ROLE.ADMIN },
      { id: 2, name: "Sam", role: ROLE.CONSUMER },
      { id: 3, name: "Foo", role: ROLE.BUSINESS },
      { id: 4, name: "Joe", role: ROLE.BUSINESS },
      { id: 5, name: "Angela", role: ROLE.HELPYA },
      { id: 6, name: "Issac", role: ROLE.CONSUMER },
    ],
    projects: [
      { id: 1, name: "Bobs ad", userId: 1 },
      { id: 2, name: "Sams ad", userId: 2 },
      { id: 3, name: "Foos ad", userId: 3 },
    ],
  };
  