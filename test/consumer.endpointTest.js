let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("consumer", "1");

console.log(token);

//make mocha unit test for consumer create endpoint with token
describe("POST /api/consumer", () => {
  it("consumer create", (done) => {
    chai
      .request(server)
      .post("/api/consumer")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "bob",
        email: "bob@bob.com",
        password: "password",
        phone: "1234567890",
        address: "1234 bob street",
        city: "bob city",
        state: "bob state",
        zip: "12345",
        country: "bob country",
      })
      .end((err, res) => {
        if (res) {
          res.should.have.status(200);
          res.body.should.be.a("object");
          //console.log(res.body);
        } else {
          console.log("result is null");
        }
      });
    done();
  });
});

//mocha unit test to get all consumer with token
describe("GET /api/consumer", () => {
  it("get all consumer", (done) => {
    chai
      .request(server)
      .get("/api/consumer")
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        if (res) {
          res.should.have.status(200);
          res.body.should.be.a("object");
          //console.log(res.body);
        } else {
          console.log("result is null");
        }
      });
    done();
  });
});

describe("GET /api/consumer", () => {
  it("consumer findOne", (done) => {
    chai
      .request(server)
      .get("/api/consumer/5")
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        if (res) {
          res.should.have.status(200);
          res.body.should.be.a("object");
          console.log(res.body);
        } else {
          console.log("result is null");
        }
      });

    done();
  });
});

describe("PUT /api/consumer", () => {
  it("consumer update", (done) => {
    chai
      .request(server)
      .put("/api/consumer/8")
      .set("Authorization", `Bearer ${token}`)
      .send({
        phone: (
          Math.floor(Math.random() * (999999999 - 1000000000 + 1)) + 999999999
        ).toString(),
      })
      .end((err, res) => {
        if (res) {
          res.should.have.status(200);
          res.body.should.be.a("object");
          console.log(res.body);
        } else if (err) {
          console.log(err);
        }
      });
    done();
  });
});
