const consumer = require('../app/models/consumer.model')
let chai = require("chai");
const stringEncryption = require('../app/middleware/cryptos');

const expect = chai.expect;

const res = {
  send:(value)=>{}
}

// cache database
let cacheDB = []

describe("consumer unit test",()=>{
  describe('consumer create', () => { 
    var consumerDB = {
      'consumerID': 100,
      'fname_of_consumer': 'fname',
      'lname_of_consumer': 'lname',
      'email': 'test1@163.com',
      'phone_number': '13000001112',
      'location': 'AS',
      'consumer_profile': 'abc',
      'generalID': 1,
      'password': stringEncryption('123456')
    }
    it("should add a new consumer",(done)=>{
      if(cacheDB.length>0){
        const consumberModel = cacheDB.find(item=>item.consumerID===consumerDB.consumerID)
        if(consumberModel) return
      }
      const result = new consumer(consumerDB)
      cacheDB.push(result)
      expect(result.consumerID).to.be.an("number")
      expect(result.fname_of_consumer).to.be.an("string")
      expect(result.lname_of_consumer).to.be.an("string")
      expect(result.email).to.be.an("string")
      expect(result.phone_number).to.be.an("string")
      expect(result.location).to.be.an("string")
      expect(result.consumer_profile).to.be.an("string")
      expect(result.generalID).to.be.an("number")
      expect(result.password).to.be.an("string")
      done()
    })

    it("findOne",(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const consumberModel = cacheDB.find(item=>item.consumerID===id)
        if(consumberModel){
          expect(consumberModel).to.be.an('object')
        }
      }
      done()
    })

    it('update',(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const consumberModel = cacheDB.find(item=>item.consumerID===id)
        if(consumberModel){
          consumberModel.fname_of_consumer='ftest'
          consumberModel.lname_of_consumer='ltest'
        }
        console.log(consumberModel)
        expect(consumberModel).to.be.an('object')
      }
      done()
    })
  })

})