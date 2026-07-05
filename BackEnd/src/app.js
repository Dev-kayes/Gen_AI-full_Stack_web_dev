const express = require("express");
const connectDB = require("./config/database");
// require all the routes here:
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
module.exports = app;
connectDB();

// use the routes:
app.use("/api/auth", authRouter);
