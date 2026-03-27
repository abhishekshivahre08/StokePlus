const { model } = require("mongoose");

const { OrederSchema } = require("../Scehmaa/OrderSchema");

const OrderModel = model("order", OrederSchema);

module.exports = OrderModel;