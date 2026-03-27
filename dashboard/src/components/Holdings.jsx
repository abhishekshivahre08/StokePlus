



import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    // API call - Make sure your backend is running on 3002
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="holdings-container">
      <style>
        {`
          .holdings-container { padding: 10px; }
          .title { margin-bottom: 20px; font-weight: 600; }

          /* Table Wrapper for Horizontal Scroll */
          .order-table {
            width: 100%;
            overflow-x: auto; /* Mobile par scroll enable karega */
            margin-bottom: 30px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }

          table {
            width: 100%;
            border-collapse: collapse;
            min-width: 800px; /* Force minimum width to keep columns readable */
          }

          th {
            text-align: left;
            padding: 12px;
            background-color: #f9f9f9;
            color: #9b9b9b;
            font-size: 13px;
            border-bottom: 1px solid #eee;
          }

          td {
            padding: 15px 12px;
            font-size: 14px;
            border-bottom: 1px solid #f1f1f1;
          }

          .profit { color: #4caf50; }
          .loss { color: #df514c; }

          /* Summary Stats Row */
          .stats-row {
            display: flex;
            justify-content: space-around;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }

          .stats-col h5 { margin: 0; font-size: 18px; }
          .stats-col p { color: #9b9b9b; font-size: 13px; margin-top: 5px; }

          /* Graph Container */
          .graph-container {
            width: 100%;
            height: auto;
            background: #fff;
            padding: 15px;
            border-radius: 8px;
          }

          /* Mobile Tweaks */
          @media (max-width: 768px) {
            .stats-row {
              flex-direction: column;
              gap: 20px;
            }
            .stats-col {
              border-bottom: 1px solid #eee;
              padding-bottom: 10px;
            }
            .stats-col:last-child { border-bottom: none; }
          }
        `}
      </style>

      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Responsive Table Wrapper */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Row */}
      <div className="stats-row shadow-sm">
        <div className="stats-col">
          <h5>29,875.55</h5>
          <p>Total investment</p>
        </div>
        <div className="stats-col">
          <h5>31,428.95</h5>
          <p>Current value</p>
        </div>
        <div className="stats-col">
          <h5 className="profit">1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="graph-container shadow-sm">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;

                                                                                                                                       