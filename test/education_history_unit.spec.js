let chai = require("chai");
const education_history = require('../app/models/education_history.model');
const expect = chai.expect;

const res = {
  send:(value)=>{}
}

// cache database
let cacheDB = []

describe("education_history unit test",()=>{
  describe('education_history create', () => { 
    var education_historyDB = {
      'businessID': 100,
      'education_level': 'university',
      'highest_education_completed': 'high school',
    }

    it("should add a new education_history",(done)=>{
      if(cacheDB.length>0){
        const education_historyModel = cacheDB.find(item=>item.businessID===education_historyDB.businessID)
        if(education_historyModel) return
      }
      const result = new education_history(education_historyDB)
      cacheDB.push(result)
      expect(result.businessID).to.be.an("number")
      expect(result.education_level).to.be.an("string")
      expect(result.highest_education_completed).to.be.an("string")
      done()
    })

    it("findOne",(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const education_historyModel = cacheDB.find(item=>item.businessID===id)
        if(education_historyModel){
          expect(education_historyModel).to.be.an('object')
        }
      }
      done()
    })

    it('update',(done)=>{
      const id = 100
      if(cacheDB.length>0){
        const education_historyModel = cacheDB.find(item=>item.businessID===id)
        if(education_historyModel){
          education_historyModel.education_level = 'high school'
          education_historyModel.highest_education_completed = 'primary school'
        }
        console.log(education_historyModel)
        expect(education_historyModel).to.be.an('object')
      }
      done()
    })
  })

})