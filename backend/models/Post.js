const { request } = require("express");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  basicPrice: Number
})

const productSchema = new Schema({
  productName: String,
  count: Number,
  price: [priceSchema],
});

const mongodbTemplate = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  product: [productSchema],
});

module.exports = mongoose.model("Posts", mongodbTemplate);