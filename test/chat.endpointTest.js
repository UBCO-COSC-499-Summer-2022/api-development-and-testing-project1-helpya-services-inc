let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("chat", "1");

console.log(token);


//make mocha unit test for chat create endpoint with token
describe("POST /api/chat", () => {
    it("chat create", (done) => {
        chai
        .request(server)
        .post("/api/chat")
        .set("Authorization", `Bearer ${token}`)
        .send({
            name: "bob",
            message: "hello"
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

describe("GET /api/chat", () => {
    it("chat find", (done) => {
        chai
        .request(server)
        .get("/api/chat")
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

describe("DELETE /api/chat", () => {
    it("chat delete", (done) => {
        chai
        .request(server)
        .delete("/api/chat")
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
