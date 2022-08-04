let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("recentSearches", "1");

console.log(token);


//make mocha unit test for consumer create endpoint with token
describe("POST /api/recentSearches", () => {
    it("recentSearches create", (done) => {
        chai.request(server)
        .post("/api/recentSearches")
        .set("Authorization", `Bearer ${token}`)
        .send({
            name: "bob",
            message: "business",
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

describe("GET /api/recentSearches", () => {
    it("recentSearches findAll", (done) => {
        chai
        .request(server)
        .get("/api/recentSearches")
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

describe("GET /api/recentSearches", () => {
    it("recentSearches findOne", (done) => {
        chai
        .request(server)
        .get("/api/recentSearches/${businessID}")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(response.body);
        }
        );
        done();
    });
});

describe("PUT /api/recentSearches", () => {
    it("recentSearches update", (done) => {
        chai
        .request(server)
        .put("/api/recentSearches/${businessID}")
        .set("Authorization", `Bearer ${token}`)
        .send({
            message: "IT",
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

describe("DELETE /api/recentSearches", () => {
    it("recentSearches delete", (done) => {
        chai
        .request(server)
        .delete("/api/recentSearches/${businessID}")
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