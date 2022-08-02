let chai = require("chai");
const accounting = require('../app/models/accounting.model');
const expect = chai.expect;

const res = {
  send:(value)=>{}
}

// cache database
let cacheDB = []

describe("accounting unit test",()=>{
  describe('accounting create', () => { 
    var accountingDB = {
      'businessID': 100,
      'payment_history': 'history',
      'bank_information': 'CIBC',
      'rate_per_hour': 20.2,
    }

    it("should add a new accounting",(done)=>{
      if(cacheDB.length>0){
        const accountingModel = cacheDB.find(item=>item.businessID===accountingDB.businessID)
        if(accountingModel) return
      }
      const result = new accounting(accountingDB)
      cacheDB.push(result)
      expect(result.businessID).to.be.an("number")
      expect(result.payment_history).to.be.an("string")
      expect(result.bank_information).to.be.an("string")
      expect(result.rate_per_hour).to.be.an("number")
      done()
    })

    it("findOne",(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const accountingModel = cacheDB.find(item=>item.businessID===id)
        if(accountingModel){
          expect(accountingModel).to.be.an('object')
        }
      }
      done()
    })

    it('update',(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const accountingModel = cacheDB.find(item=>item.businessID===id)
        if(accountingModel){
          accountingModel.bank_information = 'RBC'
          accountingModel.rate_per_hour = 25.2
        }
        console.log(accountingModel)
        expect(accountingModel).to.be.an('object')
      }
      done()
    })
  })

})