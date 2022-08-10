let auth = require("../app/middleware/auth");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();
let token = auth.setToken("job_type", "1");

console.log(token);


//make mocha unit test for job_type create endpoint with token
describe("POST /api/job_type", () => {
    it("job_type create", (done) => {
        chai.request(server)
        .post("/api/job_type")
        .set("Authorization", `Bearer ${token}`)
        .send({
            name: "bob",
            job: "project manager",
        })
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.be.a("object");
                console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("GET /api/job_type", () => {
    it("job_type findAll", (done) => {
        chai
        .request(server)
        .get("/api/job_type")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
            if (res) {
                res.should.have.status(200);
                res.body.should.be.a("array");
                console.log(res.body);
            } else {
                console.log("result is null");
            }
        }
        );
        done();
    });
});

describe("GET /api/job_type", () => {
    it("job_type findOne", (done) => {
        chai
          .request(server)
          .get("/api/job_type/?id=2")
          .set("Authorization", `Bearer ${token}`)
          .end((err, res) => {
            if (res) {
              res.should.have.status(200);
              res.body.should.be.a("array");
              console.log(res.body);
            } else {
              console.log("result is null");
            }
          });
        done();
    });
});

// describe("PUT /api/job_type", () => {
//     it("job_type update", (done) => {
//         chai
//           .request(server)
//           .put("/api/job_type/?id=3")
//           .set("Authorization", `Bearer ${token}`)
//           .send({
//             job: "cashier",
//           })
//           .end((err, res) => {
//             if (res) {
//               res.should.have.status(200);
//               res.body.should.be.a("object");
//               console.log(res.body);
//             } else {
//               console.log("result is null");
//             }
//           });
//         done();
//     });
// });
