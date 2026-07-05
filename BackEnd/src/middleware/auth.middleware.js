const jwt = require("jsonwebtoken");
const tokenBlackListModel = require("../model/blacklist.Model");

async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      Msg: "Token not Provided",
    });
  }
  const isTokenBlackListedOrNot = tokenBlackListModel.findOne({ token });
  if (isTokenBlackListedOrNot) {
    return res.status(404).json({
      msg: "Invalid Token",
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
