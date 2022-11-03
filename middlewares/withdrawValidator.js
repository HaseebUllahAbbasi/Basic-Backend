const validateWithdraw = (req, res, next) => {
  const { userId, amount } = req.body;
  if (
    userId === undefined ||
    typeof userId !== "string" ||
    userName.length === 0 ||
    amount === undefined ||
    typeof userId !== "number" ||
    amount === 0
  ) {
    res.status(400).json({
      message: "please Enter Id and amount should be greater then 0",
    });
    return;
  }
  next();
};
module.exports = validateWithdraw;