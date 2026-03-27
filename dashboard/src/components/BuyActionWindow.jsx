



import React, { useState, useContext } from "react"; // 1. useContext import kiya
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // 2. Context se closeBuyWindow function ko extract kiya
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
    .then(() => {
      // Order success hone ke baad window band karo
      closeBuyWindow(); 
    })
    .catch((err) => {
      console.error("Order failed:", err);
    });
  };

  const handleCancelClick = () => {
    // 3. Ab ye function sahi se kaam karega
    closeBuyWindow();
  };

  return (
    <div className="container-fluid p-3 shadow-lg rounded bg-white" id="buy-window">
      <div className="regular-order">
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <fieldset className="border p-2 rounded">
              <legend className="float-none w-auto px-2 fs-6 text-muted">Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                className="form-control border-0 shadow-none"
                onChange={(e) => setStockQuantity(Number(e.target.value))} // Number mein convert karna accha hota hai
                value={stockQuantity}
              />
            </fieldset>
          </div>
          
          <div className="col-12 col-sm-6">
            <fieldset className="border p-2 rounded">
              <legend className="float-none w-auto px-2 fs-6 text-muted">Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                className="form-control border-0 shadow-none"
                onChange={(e) => setStockPrice(Number(e.target.value))}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-top d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
        <span className="text-muted fw-bold">
          Margin required <span className="text-dark">₹140.65</span>
        </span>
        
        <div className="d-flex gap-2 w-100 w-sm-auto">
          <button 
            className="btn btn-primary flex-grow-1 px-4 py-2" 
            onClick={handleBuyClick}
          >
            Buy
          </button>
          <button 
            className="btn btn-outline-secondary flex-grow-1 px-4 py-2" 
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;