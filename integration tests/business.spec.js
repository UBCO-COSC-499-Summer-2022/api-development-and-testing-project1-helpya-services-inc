var assert = require("assert");
let chai = require("chai");
let chaiHttp=require("chai-http");
let server = require("../server");

chai.should();
chai.use(chaiHttp);

let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29uc3VtZXIiLCJpZCI6MSwiaWF0IjoxNjU4OTA3NzA3LCJleHAiOjE2NTg5OTQxMDd9.IUfl3uYNDbb9aXQ9W9Rg8_clgNiktD8FGLt13Wobuno';
const businessID = 1002
const businessAPIById = `/api/business/${businessID}`
const creation = {
    'businessID': businessID,
    'business_name': 'zipcode',
    'owner_fname': 'jack',
    'owner_lname': 'wang',
    'business_profile': 'insert link',
    'email': 'test1@163.com',
    'phone_number': '13000001112',
    'rate_per_hour': '2.00',
    'location': 'AS',
    'keywords': 'happy/hungry/sad',
    'education': 'university',
    'pictures': 'insert link',
    'description': 'insert description',
    'general_ID': 1,
    'active_account': 'TRUE'
}
describe('business API',()=>{
    describe('business',() => {
        // Create 
        it('create',(done) => {
            chai.request(server)
            .post("/api/business/")
            .set('Authorization',`Bearer ${token}`)
            .send(creation)
            .end((err, response)=>{
                if(err) throw new Error(err)
                assert.equal(response.text,"success");
                done();
            })
        })

        // FindAll
        it('findAll',(done) => {
            chai.request(server)
            .get("/api/business/")
            .set('Authorization',`Bearer ${token}`)
            .end((err, response)=>{
            response.body.should.be.a("array");
            done();
            })
        });

            // FindOne
        it('findOne',(done) => {
            chai.request(server)
            .get(businessAPIById)
            .set('Authorization',`Bearer ${token}`)
            .end((err, response)=>{
                response.body.should.be.a("object");
                done();
            })
        });
    })
});