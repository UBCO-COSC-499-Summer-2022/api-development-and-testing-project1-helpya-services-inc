const express = require("express");
const { expressjwt: expressjwt } = require("express-jwt");
const auth = require("./app/middleware/auth.js");
const { validationTokenAuth, JWT_CONFIG } = require("./app/middleware/auth.js");
const cors = require("cors");
const { ROLE, users } = require("./data");
const { authUser, authRole } = require("./authenticate");
const projectRouter = require("./app/routes/account_operations");
const app = express();
app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);

var corsOptions = {
  origin: "http://localhost:3306",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Verify which apis do not require tokens
app.use(
  expressjwt({
    secret: auth.JWT_CONFIG.scriect,
    algorithms: ["HS256"],
  }).unless({
    path: auth.JWT_CONFIG.path,
  })
);
//validation token
app.use((req, res, next) => {
  validationTokenAuth(req, res, next);
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HelpYa application." });
});

app.get("/dashboard", authUser, (req, res) => {
  res.json({message: 'Home Page'});
});

app.get("/consumer", authUser, authRole(ROLE.CONSUMER), (req, res) => {
  res.json({message: 'Consumer Page'});
});

app.get("/business", authUser, authRole(ROLE.BUSINESS), (req, res) => {
    res.json({message: 'Business Page'});
});

app.get("/admin", authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.json({message: 'Admin Page'});
});

app.get("/helpya", authUser, authRole(ROLE.HELPYA), (req, res) => {
  res.json({message: 'Helpya Page'});
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

require("./app/routes/consumer.routes.js")(app);
require("./app/routes/stripe.accounting.routes.js")(app);
require("./app/routes/business.routes.js")(app);
require("./app/routes/chat.routes.js")(app);
require("./app/routes/consumer_history.routes.js")(app);
require("./app/routes/stripe.payment.routes.js")(app);
require("./app/routes/recentSearches.routes.js")(app);
require("./app/routes/education_history.routes.js")(app);
require("./app/routes/job_type.routes.js")(app);
require("./app/routes/login.routes.js")(app);
require("./app/routes/stripe.subscription.routes")(app);
require("./app/routes/strip.coupon.routes")(app);
require("./app/routes/stripe.customer.routes")(app);
require("./app/routes/stripe.invoice.routes")(app);
require("./app/routes/stripe.accounting.routes")(app);
require("./app/routes/ad.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DB_NAME);
  console.log(process.env.DB_PORT);
});
