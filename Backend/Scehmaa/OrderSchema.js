const { Schema } = require("mongoose");

const OrederSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
});

module.exports = { OrederSchema };