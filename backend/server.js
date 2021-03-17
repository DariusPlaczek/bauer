import userEvent from "@testing-library/user-event";
import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import NewUser from "./schemas/firstSchema.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = "mongodb://localhost:27017/test";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Send");
});

// Hinzufügen eines Users
app.post("/addNewUser", (req, res) => {
  const newUsers = req.body;

  NewUser.create(newUsers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Holen eines Users
app.get("/addNewUser", (req, res) => {
  NewUser.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


// Löschen einer Users
app.delete("/removeUser", async (req, res) => {
  try {
    const removedPost = await NewUser.remove({ _id: "605237d1616dc214580e0996" });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update eines Users
app.patch("/updateUser", async (req, res) => {
  try {
    const update = await NewUser.updateOne(
      { _id: '6050e16397cdde9b2129b4b9' },
      { $set: { name: 'update-User' } }
      // { _id: req.params.postId },
      // { $set: { title: req.body.title } }
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
})

// Update Aller Users
app.patch("/allUser", async (req, res) => {
  try {
    const update = await NewUser.updateOne(
      { _id: '6050e16397cdde9b2129b4b9' },
      { $set: { name: 'updates' } }
      // { _id: req.params.postId },
      // { $set: { title: req.body.title } }
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
})


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
