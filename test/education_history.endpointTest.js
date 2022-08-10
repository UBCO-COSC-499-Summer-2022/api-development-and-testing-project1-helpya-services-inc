let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("education_history", "1");

console.log(token);


//make mocha unit test for education_history create endpoint with token
describe("POST /api/education_history", () => {
    it("education_history create", (done) => {
        chai.request(server)
        .post("/api/education_history")
        .set("Authorization", `Bearer ${token}`)
        .send({
            name: "bob",
            age: "21",
            city: "vancouver",
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

describe("GET /api/education_history", () => {
    it("education_history findAll", (done) => {
        chai
        .request(server)
        .get("/api/education_history")
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

describe("GET /api/education_history", () => {
    it("education_history findOne", (done) => {
        chai
        .request(server)
        .get("/api/education_history/1")
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

describe("PUT /api/education_history", () => {
    it("education_history update", (done) => {
        chai
        .request(server)
        .put("/api/education_history/2")
        .set("Authorization", `Bearer ${token}`)
        .send({
            city: "kelowna",
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
