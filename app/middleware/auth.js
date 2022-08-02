const jwt = require("jsonwebtoken");

const JWT_CONFIG = {
  scriect: "jvp3_D*@vccs.f9skqlop#z",
  path: [{ url: "/api/login/consumer", method: "POST" }],
};

const setToken = (type, userId) => {
  return jwt.sign({ type, id: userId }, JWT_CONFIG.scriect, {
    expiresIn: "24h",
  });
};

const validationTokenAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === undefined) {
    return next();
  }
  try {
    jwt.verify(token.split(" ")[1], JWT_CONFIG.scriect, (err, data) => {
      console.log(data);
      req.userInfo = {
        type: data.type,
        id: data.id,
      };
      return next();
    });
  } catch (error) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }
};

module.exports = {
  setToken,
  validationTokenAuth,
  JWT_CONFIG,
};
