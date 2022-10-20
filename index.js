const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to express");
});

//! Static API
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

//! Dyanmic API
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryItems = news.filter((n) => n.category_id === id);
  res.send(categoryItems);
});

app.listen(port, () => {
  console.log("port started on", port);
});
