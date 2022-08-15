const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobileno: { type: String },
  userName: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Username Exist"],
  },
  email: {
    type: String,
    // required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
