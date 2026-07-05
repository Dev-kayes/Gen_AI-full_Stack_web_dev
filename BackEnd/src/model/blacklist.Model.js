const { default: mongoose } = require("mongoose");

const blackListTokenModel = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is added to be blackListed"],
    },
  },
  {
    timestamps: true,
  },
);
const tokenBlackListModel = mongoose.model(
  "tokenBlackList",
  blackListTokenModel,
);

module.exports = tokenBlackListModel;
