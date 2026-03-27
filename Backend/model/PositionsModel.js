const { model } = require("mongoose");

const { PositionsSchema } = require("../Scehmaa/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };