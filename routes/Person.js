const express = require("express");
const router = express.Router();
const {
  getAllPersons,
  createPersonAccount,
  withdraw,
} = require("../controllers/Person");

const registerValidator = require("../middlewares/validateData");
const withdrawValidator = require("../middlewares/withdrawValidator");
const depositValidator = require("../middlewares/depositValidator");

router.route("/registerUser").post(createPersonAccount);
router.route("/getAllData").get(getAllPersons);
router.route("/withdraw").post(withdraw);
module.exports = router;
