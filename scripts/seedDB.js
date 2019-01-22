const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/shinbaymenu"
);

const shindataSeed = [
  {
    title: "SIXTH COURSE",
    description: "House-made Mascarpone Panna Cotta served with seasonal fruit",
  
    date: new Date(Date.now())
  },
 


  {
    title: "FIFTH COURSE",
    description: "Nigiri Sushi 5 PIECES of Catch of the Day fish prepared in Nigiri style sushi",
  
    date: new Date(Date.now())
  }
];

db.Shindata
  .remove({})
  .then(() => db.Shindata.collection.insertMany(shindataSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
