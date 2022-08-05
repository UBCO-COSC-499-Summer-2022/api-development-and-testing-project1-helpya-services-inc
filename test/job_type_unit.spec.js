// let chai = require("chai");
// const job_type = require('../app/models/job_type.model');
// const expect = chai.expect;

// const res = {
//   send:(value)=>{}
// }

// // cache database
// let cacheDB = []

// describe("job_type unit test",()=>{
//   describe('job_type create', () => { 
//     var job_typeDB = {
//       'businessID': 100,
//       'job_title': 'front-end engineer',
//       'job_category': 'IT',
//     }

//     it("should add a new job_type",(done)=>{
//       if(cacheDB.length>0){
//         const job_typeModel = cacheDB.find(item=>item.businessID===job_typeDB.businessID)
//         if(job_typeModel) return
//       }
//       const result = new job_type(job_typeDB)
//       cacheDB.push(result)
//       expect(result.businessID).to.be.an("number")
//       expect(result.job_title).to.be.an("string")
//       expect(result.job_category).to.be.an("string")
//       done()
//     })

//     it("findOne",(done)=>{
//       const id = 100
//       if(cacheDB.length>0){
//         const job_typeModel = cacheDB.find(item=>item.businessID===id)
//         if(job_typeModel){
//           expect(job_typeModel).to.be.an('object')
//         }
//       }
//       done()
//     })

//     it('update',(done)=>{
//       const id = 100
//       if(cacheDB.length>0){
//         const job_typeModel = cacheDB.find(item=>item.businessID===id)
//         if(job_typeModel){
//           job_typeModel.job_title = 'project manager'
//           job_typeModel.job_category = 'economic'
//         }
//         console.log(job_typeModel)
//         expect(job_typeModel).to.be.an('object')
//       }
//       done()
//     })
//   })

// })