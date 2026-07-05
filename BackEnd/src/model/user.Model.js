const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      unique: [true, "Name already exists"],
      required: true,
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const usermodel = mongoose.model("User", userSchema);

module.exports = usermodel;
