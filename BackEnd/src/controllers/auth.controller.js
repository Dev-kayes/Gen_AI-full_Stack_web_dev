const usermodel = require("../model/user.Model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlackListModel = require("../model/blacklist.Model");
var cookieParser = require("cookie-parser");

async function registerAuthController(req, res) {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const isUserExistsOrNot = await usermodel.findOne({
    $or: [{ userName }, { email }],
  });
  if (isUserExistsOrNot) {
    return res.status(400).json("User Already Exists");
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await usermodel.create({
    userName,
    email,
    password: hash,
  });
  const token = jwt.sign(
    {
      id: user._id,
      userName: user.userName,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  (res.cookie("token", token),
    res.status(201).json(
      { message: "User register successful" },
      {
        user: {
          userName: user.userName,
          email: user.email,
        },
      },
    ));
}

async function loginAuthController(req, res) {
  const { email, password } = req.body;

  const user = await usermodel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Email or Password" });
  }
  const token = jwt.sign(
    { id: user._id, userName: user.userName },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "user LoggesIn successful",
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
    },
  });
}

async function logOutAuthController(req, res) {
  const token = req.cookies.token;
  if (token) {
    await tokenBlackListModel.create({ token });
  }
  res.clearCookie("token");
  res.status(201).json({ msg: "User Logged Out successful" });
}

async function getMeController(req, res) {
  const user = usermodel.findById(req.user.id);
  res.status(200).json({
    msg: "User Details fetched successful",
    user: {
      id: user._id,
      name: user.userName,
      email: user.email,
    },
  });
}

module.exports = {
  registerAuthController,
  loginAuthController,
  logOutAuthController,
  getMeController,
};
