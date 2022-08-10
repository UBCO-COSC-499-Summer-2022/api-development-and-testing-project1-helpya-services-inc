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

describe("GET /api/recentSearches", () => {
    it("recentSearches findAll", (done) => {
        chai
        .request(server)
        .get("/api/recentSearches")
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

describe("GET /api/recentSearches", () => {
    it("recentSearches findOne", (done) => {
        chai
        .request(server)
        .get("/api/recentSearches/2")
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

describe("PUT /api/recentSearches", () => {
    it("recentSearches update", (done) => {
        chai
        .request(server)
        .put("/api/recentSearches/3")
        .set("Authorization", `Bearer ${token}`)
        .send({
            message: "IT",
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
