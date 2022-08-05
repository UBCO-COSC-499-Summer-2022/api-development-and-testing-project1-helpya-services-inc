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
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(response.body);
        }
        );
        done();
    });
});

describe("GET /api/consumer", () => {
    it("consumer findAll", (done) => {
        chai
        .request(server)
        .get("/api/consumer")
        .set("Authorization", `Bearer ${token}`)
        .end((error, res) => {
            res.shoud.have.status(200);
            res.body.should.be.a('object');
            console.log(response.body);
        }
        );
        done();
    });
});

describe("GET /api/consumer", () => {
    it("consumer findOne", (done) => {
        chai
        .request(server)
        .get("/api/consumer/${consumerID}")
        .set("Authorization", `Bearer ${token}`)
        .end((error, response) => {
            res.shoud.have.status(200);
            res.body.should.be.a('object');
            console.log(response.body);
        }
        );
        done();
    });
});

describe("PUT /api/consumer", () => {
    it("consumer update", (done) => {
        chai
        .request(server)
        .put("/api/consumer/1")
        .set("Authorization", `Bearer ${token}`)
        .send({
            phone: "111111111",
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

describe("DELETE /api/consumer", () => {
    it("consumer delete", (done) => {
        chai
        .request(server)
        .delete("/api/consumer/${consumerID}")
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
