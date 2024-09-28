const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Models
const Product = require("./models/product");

// connect to db
mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products", { products });
});

app.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("products/show", { product });
});

app.listen(3000, () => {
  console.log(`shop app listening on http://127.0.0.1:3000`);
});
