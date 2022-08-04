let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("business", "1");

console.log(token);


//make mocha unit test for consumer create endpoint with token
describe("POST /api/business", () => {
    it("business create", (done) => {
        chai.request(server)
        .post("/api/business")
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
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(response.body);
        }
        );
        done();
    });
});

describe("GET /api/business", () => {
    it("business findAll without send", (done) => {
        chai
        .request(server)
        .get("/api/business")
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

describe("GET /api/business", () => {
    it("business findAll with send", (done) => {
        chai
        .request(server)
        .get("/api/business/")
        .set("Authorization", `Bearer ${token}`)
        .send({
            name: "bobby",
            address: "1234 bobby street"
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(response.body);
        }
        );
        done();
    });
});

describe("GET /api/business", () => {
    it("consumer findOne", (done) => {
        chai
          .request(server)
          .get("/api/business/1150")
          .set("Authorization", `Bearer ${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            console.log(response.body);
          });
        done();
    });
});

describe("PUT /api/business", () => {
    it("business update", (done) => {
        chai
        .request(server)
        .put("/api/business/1150")
        .set("Authorization", `Bearer ${token}`)
        .send({
            address: "5678 bobby street",
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

describe("DELETE /api/business", () => {
    it("business delete", (done) => {
        chai
        .request(server)
        .delete("/api/business/1150")
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

