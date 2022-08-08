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
            name: "bob",
            email: "bob@bob.com",
            phone: "1234567890",
            address: "1234 bob street",
            city: "bob city",
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
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
            res.should.have.status(200);
            res.body.should.not.have.property('error');
            //console.log(res.body);
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
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
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
