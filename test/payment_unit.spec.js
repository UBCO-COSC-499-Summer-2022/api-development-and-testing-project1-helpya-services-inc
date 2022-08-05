// let chai = require("chai");
// const payment = require('../app/models/payment.model');
// const expect = chai.expect;

// const res = {
//   send:(value)=>{}
// }

// // cache database
// let cacheDB = []

// describe("payment unit test",()=>{
//   describe('payment create', () => { 
//     var paymentDB = {
//       'transactionID': 100,
//       'consumerID': 100,
//       'businessID': 100,
//       'payment_logs': 'logs',
//       'payment_method': 'credit card'
//     }

//     it("should add a new payment",(done)=>{
//       if(cacheDB.length>0){
//         const paymentModel = cacheDB.find(item=>item.transactionID===paymentDB.transactionID)
//         if(paymentModel) return
//       }
//       const result = new payment(paymentDB)
//       cacheDB.push(result)
//       expect(result.transactionID).to.be.an("number")
//       expect(result.consumerID).to.be.an("number")
//       expect(result.businessID).to.be.an("number")
//       expect(result.payment_logs).to.be.an("string")
//       expect(result.payment_method).to.be.an("string")
//       done()
//     })

//     it("findOne",(done)=>{
//       const id = 100
//       if(cacheDB.length>0){
//         const paymentModel = cacheDB.find(item=>item.transactionID===id)
//         if(paymentModel){
//           expect(paymentModel).to.be.an('object')
//         }
//       }
//       done()
//     })

//     it('update',(done)=>{
//       const id = 100
//       if(cacheDB.length>0){
//         const paymentModel = cacheDB.find(item=>item.transactionID===id)
//         if(paymentModel){
//           paymentModel.payment_logs = 'logggg'
//           paymentModel.payment_method = 'debit card'
//         }
//         console.log(paymentModel)
//         expect(paymentModel).to.be.an('object')
//       }
//       done()
//     })
//   })

// })