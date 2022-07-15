const express = require("express");
const { expressjwt: expressjwt } = require("express-jwt");
const auth = require("./app/middleware/auth.js");
const { validationTokenAuth, JWT_CONFIG } = require("./app/middleware/auth.js");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3306",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Verify which apis do not require tokens
app.use(expressjwt({
  secret:auth.JWT_CONFIG.scriect,
  algorithms: ['HS256']
}).unless({
  path: auth.JWT_CONFIG.path
}))
// validation token 
app.use((req,res,next)=>{
  validationTokenAuth(req,res,next)
})
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HelpYa application." });
});
require("./app/routes/consumer.routes.js")(app);
require("./app/routes/accounting.routes.js")(app);
require("./app/routes/business.routes.js")(app);
require("./app/routes/chat.routes.js")(app);
require("./app/routes/consumer_history.routes.js")(app);
require("./app/routes/credit_card_info.routes.js")(app);
require("./app/routes/payment.routes.js")(app);
require("./app/routes/recentSearches.routes.js")(app);
require("./app/routes/education_history.routes.js")(app);
require("./app/routes/job_type.routes.js")(app);
require("./app/routes/login.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
module.exports=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
