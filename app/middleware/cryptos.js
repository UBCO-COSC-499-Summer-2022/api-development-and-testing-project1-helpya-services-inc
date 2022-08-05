const crypto = require("crypto");

const stringEncryption = (value) => {
  let md5 = crypto.createHash("md5");
  return md5.update(value).digest("hex");
};

module.exports = stringEncryption;
