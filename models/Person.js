const mongoose = require("mongoose");
const Person = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "please Enter Name"],
    maxlength: [30, "Your Name cannot exceed 30 charachters"],
    unique: [true, "You have Entered A Duplicate Name"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  balanceAmount: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Person", Person);
