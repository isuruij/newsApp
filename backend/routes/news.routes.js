const { Router } = require("express");
const { getNews } = require("../controller/news.controller");

const newsRouter = Router();

newsRouter.get("/get/:keyword", getNews);


module.exports = newsRouter; 
