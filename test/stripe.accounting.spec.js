let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("consumer", "1");

//mocha test stripe bankaccount end points
describe("POST /api/stripe/bankaccount", () => {
  it("stripe bankaccount create", (done) => {
    chai
      .request(server)
      .post("/api/stripe/bankaccount")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customerID: "cus_MBnCdYT4aL4tfU",
        bankID: "ba_EqXqXqXqXqXqXqXq",
        account_holder_name: "Test Bank Account",
        account_holder_type: "individual",
        bank_name: "Test Bank",
        country: "US",
        currency: "usd",
        fingerprint: "EqXqXqXqXqXqXqXq",
        last4: "4242",
        routing_number: "110000000",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(res.body);
      });
    done();
  });
});

describe("GET /api/stripe/bankaccount", () => {
  it("stripe bankaccount findAll for customer", (done) => {
    chai
      .request(server)
      .get("/api/stripe/bankaccount/cus_MBnCdYT4aL4tfU")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customerID: "cus_MBnCdYT4aL4tfU",
      })
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(res.body);
      });
    done();
  });
});

describe("GET /api/stripe/bankaccount", () => {
  it("stripe bankaccount findOne", (done) => {
    chai
      .request(server)
      .get("/api/stripe/bankaccount/cus_MBnCdYT4aL4tfU/ba_EqXqXqXqXqXqXqXq")
      .set("Authorization", `Bearer ${token}`)
      .send({
        ID: "cus_MBnCdYT4aL4tfU",
        bankID: "ba_dsadasdasda",
      })
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(res.body);
      });
    done();
  });
});
describe("PUT /api/stripe/bankaccount", () => {
  it("stripe bankaccount update", (done) => {
    chai
      .request(server)
      .put("/api/stripe/bankaccount/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customerID: "cus_MBlescaIjQZbbL",
        bankID: "ba_1LTO6tJ1ttqNM1k3hNWT8x08",
        updatedObject: {metadata: { order_id: "6735" }},
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(res.body);
      });
    done();
  });
});

describe("DELETE /api/stripe/bankaccount", () => {
  it("stripe bankaccount delete", (done) => {
    chai
      .request(server)
      .delete("/api/stripe/bankaccount/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customerID: "cus_MBnCdYT4aL4tfU",
        bankID: "ba_EqXqXqXqXqXqXqXqXq",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("string");
        console.log(res.body);
      });
    done();
  });
});
