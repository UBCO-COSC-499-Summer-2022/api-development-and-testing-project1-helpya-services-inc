let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("consumer", "1");

//mocha test stripe subscription end points
describe("POST /api/stripe/subscription", () => {
  it("stripe subscription create", (done) => {
    chai
      .request(server)
      .post("/api/stripe/subscription/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customer: "cus_MBnCdYT4aL4tfU",
        plan: "plan_EqXqXqXqXqXqXqXq",
      })
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

describe("GET /api/stripe/subscription", () => {
  it("stripe subscription findAll with send", (done) => {
    chai
      .request(server)
      .get("/api/stripe/subscription/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customer: "cus_MBnCdYT4aL4tfU",
        subscription: "sub_EqXqXqXqXqXqXqXq",
      })
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

describe("DELETE /api/stripe/subscription", () => {
  it("stripe subscription delete", (done) => {
    chai
      .request(server)
      .delete("/api/stripe/subscription/prod_MADCxzc8Mvnnt0")
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
