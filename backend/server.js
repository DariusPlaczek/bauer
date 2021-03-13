const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()
const port = 8080

//app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongoose.connect("mongodb://localhost:27017/local", {useNewUrlParser: true, useUnifiedTopology: true}, () =>
//   console.log("connected to DB!")
// );

const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true, useUnifiedTopology: true})
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

app.listen(port, () => {
 // console.log(`Example app listening at http://localhost:${port}`)
})

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv/config");

// app.use(cors());
// app.use(bodyParser.json()); 

// const postsRoute = require("./routes/posts");

// app.use("/posts", postsRoute);


// //ROUTES
// app.get("/", (req, res) => {
//   res.send("We are on home");
//   console.log(res)
//   console.log(req)
// });

// //Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
//   console.log("connected to DB!")
// );

// // How to we start listening to the server
// app.listen(8080);

