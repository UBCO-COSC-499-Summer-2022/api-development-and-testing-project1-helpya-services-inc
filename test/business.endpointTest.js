let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("business", "1");

console.log(token);


//make mocha unit test for business create endpoint with token
describe("POST /api/business", () => {
    it("business create", (done) => {
        chai.request(server)
        .post("/api/business")
        .set("Authorization", `Bearer ${token}`)
        .send({
            business_name: "test",
            owner_fname: "test",
            owner_lname: "test",
            business_profile: "test",
            email: "test",
            phone_number: "test",
            rate_per_hour: "test",
            location: "test",
            keywords: "test",
            education: "test",
            pictures: "test",
            description: "test",
        })
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.be.a("object");
                console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("GET /api/business", () => {
    it("get all business", (done) => {
        chai
        .request(server)
        .get("/api/business")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.not.have.property("error");
                //console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("GET /api/business", () => {
    it("business findOne", (done) => {
        chai
        .request(server)
        .get("/api/business/1151")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.be.a("object");
                console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("PUT /api/business", () => {
    it("business update", (done) => {
        chai
        .request(server)
        .put("/api/business/1153")
        .set("Authorization", `Bearer ${token}`)
        .send({
            phone: (
                Math.floor(Math.random() * (999999999 - 1000000000 + 1)) +
                999999999
              ).toString(),
        })
        .end((err, res) => {
            if (res) {
              res.should.have.status(200);
              res.body.should.be.a("object");
              console.log(res.body);
            } else if (err) {
              console.log(err);
            };
        })
        done();
    });
});
