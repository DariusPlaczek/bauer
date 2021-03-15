const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

import postRoutes from './routes/posts.js';


// const cors = require("cors");
//require("dotenv/config");

//app.use(cors());

// const postsRoute = require("./routes/posts");

// app.use("/posts", postsRoute);


//ROUTES
// app.get("/", (req, res) => {
//   res.send("We are on home");
// });

//Connect to DB

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('Connecting')))
.catch((error) => console.log(error.message))





// const express = require('express')
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express()
// const port = 3001

// //require("dotenv/config");

// //app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// // const db = mongoose.connection;
// // mongoose.connect("mongodb://localhost:27017/local", {useNewUrlParser: true, useUnifiedTopology: true}, () =>
// //   console.log("connected to DB!")
// // );

// //const db = mongoose.connection;
// mongoose.connect("mongodb://localhost:27017/local", {useNewUrlParser: true, useUnifiedTopology: true}, () =>
//   console.log("connected to DB!")
// );

// //db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function() {

// // });

// app.listen(port, () => {
// // console.log(`Example app listening at http://localhost:${port}`)
// })

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv/config");

// app.use(cors());

// const postsRoute = require("./routes/posts");

// app.use("/posts", postsRoute);


// //ROUTES
// app.get("/", (req, res) => {
//   res.send("We are on home");
// });

// //Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
//   console.log("connected to DB!")
// );

// // How to we start listening to the server
// app.listen(8080);
