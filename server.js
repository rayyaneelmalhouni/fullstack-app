//Require
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;
const indexRoutes = require("./routes/index");
const mongoose = require("mongoose");
require("dotenv").config();
//Middleware
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
//DATABASE
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@database.wiher.mongodb.net/appDataBase?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error(err));
//Routes
app.use("/", indexRoutes);
//listening
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
