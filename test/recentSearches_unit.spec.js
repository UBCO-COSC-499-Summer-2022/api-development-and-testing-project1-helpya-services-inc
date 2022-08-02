let chai = require("chai");
const recentSearches = require('../app/models/recentSearches.model');
const expect = chai.expect;

const res = {
  send:(value)=>{}
}

// cache database
let cacheDB = []

describe("recentSearches unit test",()=>{
  describe('recentSearches create', () => { 
    var recentSearchesDB = {
      'businessID': 100,
      'consumerID': 100,
      'store_name': 'abcompany',
      'store_profile': 'profile'
    }

    it("should add a new payment",(done)=>{
      if(cacheDB.length>0){
        const recentSearchesModel = cacheDB.find(item=>item.businessID===recentSearchesDB.businessID)
        if(recentSearchesModel) return
      }
      const result = new recentSearches(recentSearchesDB)
      cacheDB.push(result)
      expect(result.businessID).to.be.an("number")
      expect(result.consumerID).to.be.an("number")
      expect(result.store_name).to.be.an("string")
      expect(result.store_profile).to.be.an("string")
      done()
    })

    it("findOne",(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const recentSearchesModel = cacheDB.find(item=>item.businessID===id)
        if(recentSearchesModel){
          expect(recentSearchesModel).to.be.an('object')
        }
      }
      done()
    })

    it('update',(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const recentSearchesModel = cacheDB.find(item=>item.businessID===id)
        if(recentSearchesModel){
          recentSearchesModel.store_name = 'bcdcompany'
          recentSearchesModel.store_profile = 'profileee'
        }
        console.log(recentSearchesModel)
        expect(recentSearchesModel).to.be.an('object')
      }
      done()
    })
  })

})