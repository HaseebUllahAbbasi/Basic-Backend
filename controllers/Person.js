const catchAsyncErrors = require("../middlewares/catchAsyncError");
const Person = require("../models/Person");
exports.getAllPersons = catchAsyncErrors(async (req, res, next) => {
  const allPersons = await PersonSchema.find();
  if (allPersons.length === 0) {
    res.status(200).json({
      success: false,
      message: "no person in db",
      person: [],
    });
  } else
    res.status(200).json({
      success: true,
      persons: allPersons,
    });
});
exports.createPersonAccount = catchAsyncErrors(async (req, res, next) => {
  const { userName } = req.body;
  const createdPerson = await Person.create({ userName });
  if (createdPerson) {
    res.status(200).json({
      message: "user created",
      user: createdPerson,
    });
  } else {
    res.status(400).json({
      message: "Error while Registering user ",
    });
  }
});
exports.deposit = catchAsyncErrors(async (req, res, next) => {
  const { userId, amount } = req.body;
  const personFound = await Person.findById(userId);
  personFound.balanceAmount = personFound.balanceAmount + amount;
  personFound.save();
  res.status(200).json({
    message: "amount Deposited",
    totalAmount: personFound.balanceAmount,
  });
});
exports.withdraw = catchAsyncErrors(async (req, res, next) => {
  const { userId, amount } = req.body;
  const personFound = await Person.findById(userId);

  newAmmount = personFound.balanceAmount - amount;
  if (newAmmount >= 0) {
    personFound.balanceAmount = newAmmount;
    personFound.save();
    res.status(200).json({
      message: "amount Deposited",
      totalAmount: personFound.balance,
    });
  } else {
    res.status(400).json({
      message: "withdrawl amount exceed than current amount",
    });
  }
});
