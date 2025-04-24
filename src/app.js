const express = require("express");
require("./config/database");
const app = express();
const cors = require("cors");
const courseRouter = require("./routes/Course.router");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use("/api", courseRouter);

module.exports = { app };
