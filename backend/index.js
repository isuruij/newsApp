const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/_index.routes");

const PORT =  8080;
const host = '0.0.0.0';

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use("/api/v1/", router);


app.listen(PORT,host, async () => {
  console.log("server is running on port " + PORT);
}); 
