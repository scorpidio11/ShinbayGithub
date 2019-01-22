// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// const url = "mongodb://localhost:27017/shinbay";
// mongoose.connect(url);

// // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shinbaymenu");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
var express = require('express');
var mongo = require("mongodb").MongoClient;

var dataURL = process.env.MONGOLAB_URI;

var app = express();

app.get('/', function (req, res) {
    
    res.writeHead(200, {'content-type':'application/JSON'});
    
    mongo.connect(dataURL, function(err, db) {
       if (err) throw err;
       
       var collection = db.collection('data');
       
       collection.insert({
           "key" :"test"
       }, function(err, data) {
          if (err) throw err;
          
          db.close();
          res.end(JSON.stringify(data["ops"][0]));
       });
    });
    
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port!');
})