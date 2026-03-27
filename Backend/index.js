// dot env file ko connect karne ke liye 
require("dotenv").config();

// mongodb connect karte time dns erron aaye tab ye use karna hai 
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const OrdersModel = require("./model/OrderModel");


const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// data faching
app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async(req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    })
    await newOrder.save();
    res.json("order saved!");
    console.log("data init");
});





app.listen(PORT, () => {
    console.log("app started");
    mongoose.connect(url)
        .then(() => console.log("✅ Connected to MongoDB Atlas"))
        .catch(err => console.error("❌ Connection error:", err));


})