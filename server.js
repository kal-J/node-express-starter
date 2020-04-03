const express = require("express");
const mongoose = require("mongoose");

//import routes
const user_routes = require('./routes/user_routes');

const app = express();
app.use(express.json()); //  parses incoming requests with JSON payloads

// connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/node-server", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.error(err));

// use routes
app.use(user_routes);

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Node server running on port: ${PORT}`));
