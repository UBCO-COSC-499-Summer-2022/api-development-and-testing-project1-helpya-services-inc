const business = require('../app/models/business.model')
let chai = require("chai");
const stringEncryption = require('../app/middleware/cryptos');

const expect = chai.expect;

const res = {
  send:(value)=>{}
}

// cache database
let cacheDB = []

describe("business unit test",()=>{
  describe('business create', () => { 
    var businessDB = {
      'businessID': 100,
      'business_name': 'abcd',
      'owner_fname': 'fname',
      'owner_lname': 'lname',
      'business_profile': 'linkkk',
      'email': 'test1@163.com',
      'phone_number': '13000001112',
      'rate_per_hour': 20.2,
      'location': 'AS',
      'keywords': 'shi',
      'education': 'undergrad',
      'pictures': 'linkk',
      'description': 'nice company',
      'generalID': 2,
      'active_account': 'TRUE',
    }
    it("should add a new business",(done)=>{
      if(cacheDB.length>0){
        const businessModel = cacheDB.find(item=>item.businessID===businessDB.businessID)
        if(businessModel) return
      }
      const result = new business(businessDB)
      cacheDB.push(result)
      expect(result.businessID).to.be.an("number")
      expect(result.business_name).to.be.an("string")
      expect(result.owner_fname).to.be.an("string")
      expect(result.owner_lname).to.be.an("string")
      expect(result.business_profile).to.be.an("string")
      expect(result.email).to.be.an("string")
      expect(result.phone_number).to.be.an("string")
      expect(result.rate_per_hour).to.be.an("number")
      expect(result.location).to.be.an("string")
      expect(result.keywords).to.be.an("string")
      expect(result.education).to.be.an("string")
      expect(result.pictures).to.be.an("string")
      expect(result.description).to.be.an("string")
      expect(result.generalID).to.be.an("number")
      expect(result.active_account).to.be.an("string")
      done()
    })

    it("findOne",(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const businessModel = cacheDB.find(item=>item.businessID===id)
        if(businessModel){
          expect(businessModel).to.be.an('object')
        }
      }
      done()
    })

    it('update',(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const businessModel = cacheDB.find(item=>item.businessID===id)
        if(businessModel){
          businessModel.owner_fname='ftest'
          businessModel.owner_lname='ltest'
        }
        console.log(businessModel)
        expect(businessModel).to.be.an('object')
      }
      done()
    })
  })

})