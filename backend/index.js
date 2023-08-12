const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/_index.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({origin:"*"}))
app.use(bodyParser.json())

app.use("/api/v1/", router);
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
}); 
