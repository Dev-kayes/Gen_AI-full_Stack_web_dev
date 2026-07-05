const express = require("express");
// require the controller:
// =========================================
const {
  registerAuthController,
  loginAuthController,
  logOutAuthController,
  getMeController,
} = require("../controllers/auth.controller");
const authUser = require("../middleware/auth.middleware");
const authRouter = express.Router();

// auth routes:
// ==========================================
// register controller
authRouter.post("/register", registerAuthController);
//  login controller
authRouter.post("/login", loginAuthController);
// LogOut controller
authRouter.get("/logout", logOutAuthController);
// get-me controller
authRouter.get("/get-me", authUser, getMeController);

module.exports = authRouter;
