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
    .send({businessID:10})
    .end((err, response)=>{
      console.log(response);
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

  
});
