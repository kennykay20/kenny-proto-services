const path = require("path");

module.exports = {
  user: path.join(__dirname, "./proto/user/user.service.proto"),
  auth: path.join(__dirname, "./proto/auth/auth.service.proto")
};
