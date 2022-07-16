const jwt = require("jsonwebtoken");

// Secret word
const secret = "mysecretsshhhhh";
// Expiration time
const expiration = "2h";

module.exports = {
  signToken: function ({ usernam, email, _id }) {
    // Add user's uaername, email and _id to the tocken
    const payload = { usernam, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
