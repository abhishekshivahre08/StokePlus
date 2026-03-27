
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; 

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    // 1. Order place karne se pehle confirm kar sakte hain (Optional)
    const isConfirmed = window.confirm(`Are you sure you want to sell ${stockQuantity} qty of ${uid}?`);
    
    if (isConfirmed) {
      axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL", 
      })
      .then(() => {
        // 2. Success Alert dikhayein
        alert(`Success! You sold ${stockQuantity} shares of ${uid}.`);
        
        // 3. Window band karein
        closeSellWindow();
      })
      .catch((err) => {
        console.error("Sell order failed:", err);
        alert("Oops! Something went wrong while selling.");
      });
    }
  };

  return (
    <div className="container-fluid p-3 shadow-lg rounded bg-white border-top border-danger border-4" id="sell-window">
      <div className="regular-order">
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <fieldset className="border p-2 rounded">
              <legend className="float-none w-auto px-2 fs-6 text-muted">Qty.</legend>
              <input
                type="number"
                className="form-control border-0 shadow-none"
                onChange={(e) => setStockQuantity(Number(e.target.value))}
                value={stockQuantity}
              />
            </fieldset>
          </div>
          
          <div className="col-12 col-sm-6">
            <fieldset className="border p-2 rounded">
              <legend className="float-none w-auto px-2 fs-6 text-muted">Price</legend>
              <input
                type="number"
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
          Margin Available: <span className="text-success">₹5000</span>
        </span>
        
        <div className="d-flex gap-2 w-100 w-sm-auto">
          <button 
            className="btn btn-danger flex-grow-1 px-4 py-2 fw-bold" 
            onClick={handleSellClick}
          >
            Sell
          </button>
          <button 
            className="btn btn-outline-secondary flex-grow-1 px-4 py-2" 
            onClick={closeSellWindow}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;