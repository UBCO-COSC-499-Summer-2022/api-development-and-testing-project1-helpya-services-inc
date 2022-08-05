// let chai = require("chai");
// const chat = require('../app/models/chat.model');
// const expect = chai.expect;

// const res = {
//   send:(value)=>{}
// }

// // cache database
// let cacheDB = []

// describe("chat unit test",()=>{
//   describe('chat create', () => { 
//     var chatDB = {
//       'chatID': 100,
//       'consumerID': 1,
//       'businessID': 1150
//     }

//     it("should add a new chat",(done)=>{
//       if(cacheDB.length>0){
//         const chatModel = cacheDB.find(item=>item.chatID===chatDB.chatID)
//         if(chatModel) return
//       }
//       const result = new chat(chatDB)
//       cacheDB.push(result)
//       expect(result.chatID).to.be.an("number")
//       expect(result.consumerID).to.be.an("number")
//       expect(result.businessID).to.be.an("number")
//       done()
//     })

//     it("findOne",(done)=>{
//       const id = 100
//       if(cacheDB.length>0){
//         const chatModel = cacheDB.find(item=>item.chatID===id)
//         if(chatModel){
//           expect(chatModel).to.be.an('object')
//         }
//       }
//       done()
//     })

//     it('update',(done)=>{
//       const id = 100
//       if(cacheDB.length>0){
//         const chatModel = cacheDB.find(item=>item.chatID===id)
//         if(chatModel){
//           chatModel.consumerID = 99
//           chatModel.businessID = 99
//         }
//         console.log(chatModel)
//         expect(chatModel).to.be.an('object')
//       }
//       done()
//     })
//   })

// })