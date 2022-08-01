let chai = require("chai");
const consumer_history = require('../app/models/consumer_history.model');
const expect = chai.expect;

const res = {
  send:(value)=>{}
}

// cache database
let cacheDB = []

describe("consumer_history unit test",()=>{
  describe('consumer_history create', () => { 
    var consumer_historyDB = {
      'consumerID': 100,
      'businessID': 100,
      'payment_method': 'credit card',
      'business_name': 'abcompany',
      'payment_logs': 'insertlogs',
    }

    it("should add a new consumer_history",(done)=>{
      if(cacheDB.length>0){
        const consumer_historyModel = cacheDB.find(item=>item.consumerID===consumer_historyDB.consumerID)
        if(consumer_historyModel) return
      }
      const result = new consumer_history(consumer_historyDB)
      cacheDB.push(result)
      expect(result.consumerID).to.be.an("number")
      expect(result.businessID).to.be.an("number")
      expect(result.payment_method).to.be.an("string")
      expect(result.business_name).to.be.an("string")
      expect(result.payment_logs).to.be.an("string")
      done()
    })

    it("findOne",(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const consumer_historyModel = cacheDB.find(item=>item.consumerID===id)
        if(consumer_historyModel){
          expect(consumer_historyModel).to.be.an('object')
        }
      }
      done()
    })

    it('update',(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const consumer_historyModel = cacheDB.find(item=>item.consumerID===id)
        if(consumer_historyModel){
          consumer_historyModel.payment_method = 'debit card'
          consumer_historyModel.business_name = 'bcdcompany'
        }
        console.log(consumer_historyModel)
        expect(consumer_historyModel).to.be.an('object')
      }
      done()
    })
  })

})