var assert = require("assert");
let chai = require("chai");
const { ChildProcess } = require("child_process");
let chaiHttp=require("chai-http");
let server = require("../server");
chai.should();
chai.use(chaiHttp);

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal(-1, -1);
    });
  });
});
//accounting 
describe('Accounting',() => {
  
  //FindAll
  it('findAll',(done) => {
    chai.request(server)
    .get("/api/accounting/")
    .end((err, response)=>{
      response.body.should.be.a("array");
      done();
    })
  });

  //Create 
});
