const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const PORT = process.env.PORT || 3001
const app = express(); 

//Configure Body Parser for AJAX requests
app.use (bodyParser.urlencoded({ useNewUrlParser: true}));
app.use (bodyParser.json());

//Serve up the static assets
app.use(express.static("client/build"));

//Add routes, both API and view
//.........app.use(routes);

//Connect to the Mongo DB
mongoose.connect(
  "mongodb://localhost/songrequests"
);

//Start the API server
app.listen(PORT, function (){
  console.log(`Server now on port ${PORT}!`);
});