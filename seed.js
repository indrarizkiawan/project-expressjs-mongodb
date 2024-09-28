const Product = require("./models/product");
// connect to db
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const seedProduct = [
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    size: "L",
  },
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    size: "XL",
  },
  {
    name: "Sweater",
    brand: "Gap",
    price: 650000,
    color: "merah muda",
    size: "M",
  },
  {
    name: "Sepatu Sneakers",
    brand: "Nike",
    price: 1200000,
    color: "putih",
    size: "L",
  },
  {
    name: "Tas Ransel",
    brand: "Herschel",
    price: 1500000,
    color: "biru",
    size: "L",
  },
  {
    name: "Kacamata Aviator",
    brand: "Ray-Ban",
    price: 2000000,
    color: "emas",
    size: "L",
  },
  {
    name: "Baju Renang",
    brand: "Speedo",
    price: 500000,
    color: "biru tua",
    size: "L",
  },
  {
    name: "Topi Baseball",
    brand: "New Era",
    price: 350000,
    color: "hitam",
    size: "L",
  },
  {
    name: "Rompi",
    brand: "Zara",
    price: 850000,
    color: "abu-abu",
    size: "L",
  },
  {
    name: "Jas",
    brand: "Hugo Boss",
    price: 4500000,
    color: "hitam",
    size: "XL",
  },
  {
    name: "Sepatu Loafers",
    brand: "Gucci",
    price: 8000000,
    color: "coklat",
    size: "S",
  },
];

Product.insertMany(seedProduct)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
