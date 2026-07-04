require("dotenv").config();
const app = require("./src/app");
app.listen(process.env.HOST_URI, () => {
  console.log("Server is running at port 3000");
});
