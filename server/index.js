//imports
const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/route");
const mongoose = require("mongoose");
const cors = require("cors");

//middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// Parses the text as json
app.use(bodyParser.json());
app.use("/api", api);
const corsOptions ={
    origin:'http://127.0.0.1:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.Promise = global.Promise;

//declaration
const query = "mongodb://127.0.0.1:27017/";
const db = query;
const port = 3000;

//commands  
mongoose.connect(db);
app.listen(port,  ()=> {
  console.log("Server is listening at port : " + port);
});
