const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./database/connection.js");

// ============================== Configure Env Path ==============================

dotenv.config({ path: "./config/config.env" });

connectDatabse();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is port ${process.env.PORT} in ${process.env.NODE_ENV} ✨🚀`
  );
});

// ============================== Stops Server ==============================
process.on("unhandledRejection", (err) => {
  console.log(`Error name : ${err.name} , Error msg ${err.message}  `);
  console.log("Shutting down Server due to  Rejection Errors");
  server.close(() => {
    process.exit();
  });
});
