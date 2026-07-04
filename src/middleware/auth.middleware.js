const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return status(401).json({
      Msg: "Token not Provided",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (decoded) {
      req.user = decoded;
      next();
    }
    res.send(err);
  });
}

module.exports = authUser;
