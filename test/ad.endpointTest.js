let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("ad", "1");

console.log(token);


//make mocha unit test for ad create endpoint with token
describe("POST /api/ad", () => {
    it("ad create", (done) => {
        chai.request(server)
        .post("/api/ad")
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: "nice inc hiring",
            description: "good pay",
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

describe("GET /api/ad", () => {
    it("get all ad", (done) => {
        chai
        .request(server)
        .get("/api/ad")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.be.a("array");
                //console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("GET /api/ad", () => {
    it("ad findOne", (done) => {
        chai
        .request(server)
        .get("/api/ad/2")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.be.a("array");
                console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("PUT /api/ad", () => {
    it("ad update", (done) => {
        chai
        .request(server)
        .put("/api/ad/3")
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: "nice inc hiring for summer"
        })
        .end((err, res) => {
            if (res) {
              res.should.have.status(200);
              res.body.should.be.a("object");
              console.log(res.body);
            } else{
              console.log(err);
            };
        })
        done();
    });
});
