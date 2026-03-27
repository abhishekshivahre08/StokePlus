

import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-container">
      {/* Internal CSS */}
      <style>
        {`
          .funds-container {
            padding: 20px;
            font-family: sans-serif;
          }

          .funds-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
            margin-bottom: 30px;
            flex-wrap: wrap; /* Mobile par buttons niche aa jayenge */
            gap: 15px;
          }

          .funds-header p {
            margin: 0;
            color: #666;
            font-size: 14px;
            flex: 1 1 100%; /* Mobile par full width */
          }

          .btn-group {
            display: flex;
            gap: 10px;
          }

          .btn {
            padding: 8px 20px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            font-size: 14px;
          }

          .btn-green { background-color: #4caf50; color: white; }
          .btn-blue { background-color: #387ed1; color: white; }

          .funds-row {
            display: flex;
            gap: 40px;
          }

          .funds-col {
            flex: 1;
            min-width: 300px;
          }

          .equity-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 20px;
            color: #444;
          }

          .funds-table {
            display: flex;
            flex-direction: column;
          }

          .data-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #f1f1f1;
            font-size: 14px;
          }

          .data-row p { margin: 0; }
          .imp { font-weight: bold; }
          .colored { color: #387ed1; font-size: 18px; }

          .commodity-box {
            text-align: center;
            padding: 40px;
            border: 1px dashed #ccc;
            border-radius: 8px;
            background: #fafafa;
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .funds-row {
              flex-direction: column; /* Table aur Commodity box ek ke niche ek */
            }
            .funds-header {
              text-align: center;
              justify-content: center;
            }
            .btn-group {
              width: 100%;
              justify-content: center;
            }
            .btn {
              flex: 1; /* Mobile par buttons barabar width ke honge */
              text-align: center;
            }
            .funds-col {
              min-width: 100%;
            }
          }
        `}
      </style>

      {/* Header with Buttons */}
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="btn-group">
          <Link to="#" className="btn btn-green">Add funds</Link>
          <Link to="#" className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="funds-row">
        {/* Left Column: Equity Data Table */}
        <div className="funds-col">
          <div className="equity-title">Equity</div>
          <div className="funds-table">
            <div className="data-row">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data-row">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data-row">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            
            <div className="data-row mt-3">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data-row">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data-row">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data-row">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <div className="data-row">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* Right Column: Commodity Box */}
        <div className="funds-col">
          <div className="commodity-box">
            <p className="text-muted mb-3">You don't have a commodity account</p>
            <Link to="#" className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;