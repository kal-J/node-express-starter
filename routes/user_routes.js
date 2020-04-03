const express = require("express");
const userModel = require("../models/User");

const app = express();

app.get("/users", async (req, res) => {
  const users = await userModel.find({});
  try {
      res.send(users)
  } catch (error) {
      res.status(500).send(error);
  }
  
});

app.post('/users/add', async (req,res) => {
    const user = new userModel({
        name: `user number ${Math.random()*8}`,
        email: `nodeserver@${Math.random()*9}.com`
    });
    try {
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
    

});


//export
module.exports = app;