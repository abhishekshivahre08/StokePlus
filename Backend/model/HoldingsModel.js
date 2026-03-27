const { model } = require("mongoose");

const { HoldingsSchema } = require("../Scehmaa/holdingSchema");

const HoldingsModel = new model("hoding", HoldingsSchema);

module.exports = { HoldingsModel }