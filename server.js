const express = require("express");
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

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.length("/data", (req, res) => {
  res.json({ user_name: "test", password: "test" });
});
app.put("/data", (req, res) => {
  res.json({});
});
require("./app/routes/consumer.routes.js")(app);
require("./app/routes/accounting.routes.js")(app);
require("./app/routes/business.routes.js")(app);
require("./app/routes/chat.routes.js")(app);
require("./app/routes/consumer_history.routes.js")(app);
require("./app/routes/credit_card_info.routes.js")(app);
require("./app/routes/payment.routes.js")(app);
require("./app/routes/recentSearches.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.listen(3000);
