//package import
var assert = require("assert");
let chai = require("chai");
let chaiHttp=require("chai-http");
let server = require("../server");

chai.should();
chai.use(chaiHttp);

let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29uc3VtZXIiLCJpZCI6MSwiaWF0IjoxNjU4NjQ4MzkxLCJleHAiOjE2NTg3MzQ3OTF9.wlTtcdlEo88lC2UTvuZReKvuAPiF7YlKvAfIixdsRVc';
const consumerID = 1002
const consumerAPIById = `/api/consumer/${consumerID}`
describe('consumer API',()=>{
  describe('Consumer',() => {
    // Create 
    it('create',(done) => {
      chai.request(server)
      .post("/api/consumer/")
      .set('Authorization',`Bearer ${token}`)
      .send({
        'consumerID': consumerID,
        'fname_of_consumer': 'fname',
        'lname_of_consumer': 'lname',
        'email': 'test1@163.com',
        'phone_number': '13000001112',
        'location': 'AS',
        'consumer_profile': 'abc',
        'generalID': 1,
        'password': '123456'
      })
      .end((err, response)=>{
        if(err) throw new Error(err)
        response.body.should.be.a("object")
        done();
      })
    })
  
    // FindAll
    it('findAll',(done) => {
      chai.request(server)
      .get("/api/consumer/")
      .set('Authorization',`Bearer ${token}`)
      .end((err, response)=>{
        response.body.should.be.a("array");
        done();
      })
    });
  
    // FindOne
    it('findOne',(done) => {
      chai.request(server)
      .get(consumerAPIById)
      .set('Authorization',`Bearer ${token}`)
      .end((err, response)=>{
        response.body.should.be.a("object");
        done();
      })
    });
    
    // Update
    it('Update',(done) => {
      chai.request(server)
      .put(consumerAPIById)
      .set('Authorization',`Bearer ${token}`)
      .send({
        'location':"test",
      })
      .end((err, response)=>{
        response.body.should.be.a("object");
        done();
      })
    });
  
    //delete
    it('delete',(done) => {
      chai.request(server)
      .delete(consumerAPIById)
      .set('Authorization',`Bearer ${token}`)
      .end((err, response)=>{
        response.body.message.should.be.a("string")
        done();
      })
    });
  
    after(()=>{
      server.close()
    })
  });
})
