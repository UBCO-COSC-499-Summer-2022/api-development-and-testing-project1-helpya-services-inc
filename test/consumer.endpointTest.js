const auth = require("../app/middleware/auth");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
const expect = chai.expect;

const token = auth.setToken("consumer", "1");

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
        .end((error, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            console.log(response.body);
        }
        );
        done();
    });
});
