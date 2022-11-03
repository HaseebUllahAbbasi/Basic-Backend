const express = require("express");
const router = express.Router();
const {
  getAllPersons,
  createPersonAccount,
  withdraw,
  deposit,
} = require("../controllers/Person");

const registerValidator = require("../middlewares/validateData");
const withdrawValidator = require("../middlewares/withdrawValidator");
const depositValidator = require("../middlewares/depositValidator");

router.route("/").get((req, res) => {
  res.status(200).json({
    message: "Welcome to the Deposit and Withdraw System 💲🤑",
  });
});
router.route("/registerUser").post(registerValidator, createPersonAccount);
router.route("/getAllData").get(getAllPersons);
router.route("/withdraw").post(withdrawValidator, withdraw);
router.route("/deposit").post(depositValidator, deposit);

module.exports = router;
