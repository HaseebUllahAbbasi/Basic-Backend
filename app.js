const express = require("express");
const app = new express();
const validator = require("./middlewares/validateData");
const errorMiddleware = require("./middlewares/errors");

const PersonRoutes = require("./routes/Person");

// ============================== Middlewares ==============================
app.use(express.json());
app.use(validator);
app.use(errorMiddleware);

// ============================== Added Routes ==============================

app.use(PersonRoutes);

module.exports = app;
