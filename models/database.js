const mongoose = require("mongoose");
// require('dotenv/config');

mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://abhay:abhay123@cluster0.vugib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (!err) console.log("databse connected");
    else console.log("Error");
  }
);
