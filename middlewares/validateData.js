const validateRegistration = (req, res, next) => {
  const { userName } = req.body;
  if (
    userName === undefined ||
    typeof userName !== "string" ||
    userName.length === 0
  ) {
    res.status(400).json({
      message: "please Enter User Name correctly",
    });
    return;
  }
  next();
};
module.exports = validateRegistration;
