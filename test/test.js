//package import
var assert = require("assert");
let chai = require("chai");
const { ChildProcess } = require("child_process");
let chaiHttp=require("chai-http");
let server = require("../server");
chai.should();
chai.use(chaiHttp);


//accounting_API
describe('Accounting',() => {
  
  //Create 
  it('create',(done) => {
    chai.request(server)
    .post("/api/accounting/")
    .send({
      'businessID':130,
      'payment_history':"95.98",
      'bank_information':"1111/3213/45367",
      'rate_per_hour': "34.23"
    })
    .end((err, response)=>{
      assert.equal(response.text,"success");
      done();
    })
  });

  //FindAll
  it('findAll',(done) => {
    chai.request(server)
    .get("/api/accounting/")
    .end((err, response)=>{
      response.body.should.be.a("array");
      done();
    })
  });

  //FindOne
  it('findOne',(done) => {
    chai.request(server)
    .get("/api/accounting/:id")
    .send({id:90})
    .end((err, response)=>{
      response.body.should.be.a("array");
      done();
    })
  });
  
  //Update
  it('Update',(done) => {
    chai.request(server)
    .put("/api/accounting/:id")
    .send({
      'id':100,
      'bank_information':"test",
      'rate_per_hour':"test"
    })
    .end((err, response)=>{
      assert.equal(response.text,"success")
      done();
    })
  });
});
