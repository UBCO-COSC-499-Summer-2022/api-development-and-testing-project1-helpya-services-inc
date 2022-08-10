let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("consumer", "1");

//mocha test stripe coupon end points
describe("POST /api/stripe/coupon", () => {
  it("stripe coupon create", (done) => {
    chai
      .request(server)
      .post("/api/stripe/coupon")
      .set("Authorization", `Bearer ${token}`)
      .send({
        percentage_off: 10,
        duration: "once",
        duration_in_months: 1,
        max_redemptions: 1,
        redeem_by: 1620000000,
        amount_off: 0,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(response.body);
      });
    done();
  });
});


describe("GET /api/stripe/coupon", () => {
  it("stripe coupon findAll by id", (done) => {
    chai
      .request(server)
      .get("/api/stripe/coupon/cus_IY2Z0X4Z0X4Z0X")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: "cus_IY2Z0X4Z0X4Z0X",
      })
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(response.body);
      });
    done();
  });
});

describe("GET /api/stripe/coupon", () => {
  it("stripe coupon findAll by cuponid", (done) => {
    chai
      .request(server)
      .get("/api/stripe/coupon/dyldseqy")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: "cus_IY2Z0X4Z0X4Z0X",
      })
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(response.body);
      });
    done();
  });
});

describe("GET /api/stripe/coupon", () => {
  it("stripe coupon findOne", (done) => {
    chai
      .request(server)
      .get("/api/stripe/coupon/cus_IY2Z0X4Z0X4Z0X")
      .set("Authorization", `Bearer ${token}`)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(response.body);
      });
    done();
  });
});

describe("PUT /api/stripe/coupon", () => {
  it("stripe coupon update", (done) => {
    chai
      .request(server)
      .put("/api/stripe/coupon/cus_IY2Z0X4Z0X4Z0X")
      .set("Authorization", `Bearer ${token}`)
      .send({
        percent_off:67,
        duration_in_months: 7,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        console.log(response.body);
      });
    done();
  });
});

