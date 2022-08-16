//package import
var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

chai.should();
chai.use(chaiHttp);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29uc3VtZXIiLCJpZCI6MSwiaWF0IjoxNjU4OTA3NzA3LCJleHAiOjE2NTg5OTQxMDd9.IUfl3uYNDbb9aXQ9W9Rg8_clgNiktD8FGLt13Wobuno";
//accounting_API
describe("Accounting", () => {
  // Create
  it("create", (done) => {
    chai
      .request(server)
      .post("/api/accounting/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        businessID: 1150,
        payment_history: "95.98",
        bank_information: "1111/3213/45367",
        rate_per_hour: "34.23",
      })
      .end((err, response) => {
        assert.equal(response.text, "success");
        done();
      });
  });

  // FindAll
  it("findAll", (done) => {
    chai
      .request(server)
      .get("/api/accounting/")
      .set("Authorization", `Bearer ${token}`)
      .end((err, response) => {
        response.body.should.be.a("array");
        done();
      });
  });

  // FindOne
  it("findOne", (done) => {
    chai
      .request(server)
      .get("/api/accounting/:id")
      .set("Authorization", `Bearer ${token}`)
      .send({ id: 1150 })
      .end((err, response) => {
        response.body.should.be.a("array");
        done();
      });
  });

  // Update
  it("Update", (done) => {
    chai
      .request(server)
      .put("/api/accounting/:id")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: 1150,
        bank_information: "test",
        rate_per_hour: "test",
      })
      .end((err, response) => {
        assert.equal(response.text, "success");
        done();
      });
  });

  //delete
  it("delete", (done) => {
    chai
      .request(server)
      .delete("/api/accounting/:id")
      .send({
        id: 1150,
      })
      .set("Authorization", `Bearer ${token}`)
      .end((err, response) => {
        assert.equal(response.text, "success");
        done();
      });
  });

  after(() => {
    server.close();
  });
});
