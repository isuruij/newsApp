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

const axios  = require("axios");

const API_KEY = process.env.API_KEY

// Get the current date
const currentDate = new Date();

// Get the day of the month (1-31)
const day = currentDate.getDate();

// Get the month (0-11; 0 represents January, 11 represents December)
const month = currentDate.getMonth();

// Get the full year (e.g., 2023)
const year = currentDate.getFullYear();

// Add 1 to the month to get it as a 1-based index
const monthWith1BasedIndex = month + 1;

app.listen(PORT,host, async () => {
  try {
    const axiosRes = await axios.get(`https://newsapi.org/v2/everything?q=car&from=${year}-${monthWith1BasedIndex-1}-${day}&sortBy=publishedAt&apiKey=${API_KEY}`)
    console.log(axiosRes)
} catch (error) {
    console.log("error", error)
}
  console.log("server is running on port " + PORT);
}); 
