
const express = require('express')
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");

// Import the routes
const routes = require("./routes"); 


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());



app.get("/", async (req, res) => {
  res.json({ message: "backend is running" });
});



// Use the API routes from routes.js
app.use("/", routes);

app.listen(port, () => console.log(`Server running on port ${port}`));