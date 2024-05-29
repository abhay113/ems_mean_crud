//imports
const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/route");
const mongoose = require("mongoose");

//middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// Parses the text as json
app.use(bodyParser.json());
app.use("/api", api);
mongoose.Promise = global.Promise;

//declaration
const query = "mongodb://127.0.0.1:27017/";
const db = query;
const port = 3000;

//commands  
mongoose.connect(db);
app.listen(port, function () {
  console.log("Server is listening at port:" + port);
});
