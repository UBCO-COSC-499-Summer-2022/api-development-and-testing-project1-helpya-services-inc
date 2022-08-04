// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../server");

// const expect = chai.expect;
// chai.use(chaiHttp);

// describe("Login api", () => {
//   describe("POST /api/login/consumer", () => {
//     it("consumer login", (done) => {
//       chai
//         .request(server)
//         .post("/api/login/consumer")
//         .send({
//           email: "bob_s123@hotmail.com",
//           password: "password",
//         })
//         .end((error, response) => {
//           expect(response).to.have.status(200);
//           // return token
//           // response.text -> token -> string
//           expect(response.text).to.be.a("string");
//           console.log(response.text);
//         });
//       done();
//     });

//     after(() => {
//       server.close();
//     });
//   });
// });

