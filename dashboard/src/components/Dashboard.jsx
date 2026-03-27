


import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            {/* CSS Styles Inside the Component */}
            <style>
                {`
                .dashboard-wrapper {
                    display: flex;
                    flex-direction: row; /* Laptop default */
                    min-height: 100vh;
                    background-color: #fbfbfb;
                    overflow: hidden;
                }

                .sidebar-section {
                    width: 350px;
                    border-right: 1px solid #eee;
                    background-color: #fff;
                    height: 100vh;
                    position: sticky;
                    top: 0;
                    overflow-y: auto;
                }

                .main-content {
                    flex-grow: 1;
                    padding: 30px;
                    overflow-y: auto;
                    height: 100vh;
                }

                /* Mobile Responsiveness (Screen size < 768px) */
                @media (max-width: 768px) {
                    .dashboard-wrapper {
                        flex-direction: column; /* Stack vertically */
                    }

                    .sidebar-section {
                        width: 100%;
                        height: 40vh; /* Mobile par watchlist thodi choti dikhegi */
                        position: relative;
                        border-right: none;
                        border-bottom: 1px solid #eee;
                    }

                    .main-content {
                        width: 100%;
                        height: 60vh;
                        padding: 15px;
                    }
                }

                /* Scrollbar Styling for Professional Look */
                .sidebar-section::-webkit-scrollbar, 
                .main-content::-webkit-scrollbar {
                    width: 4px;
                }
                .sidebar-section::-webkit-scrollbar-thumb, 
                .main-content::-webkit-scrollbar-thumb {
                    background: #e0e0e0;
                    border-radius: 10px;
                }
                `}
            </style>

            {/* Layout Structure */}
            <GeneralContextProvider>
                <div className="sidebar-section shadow-sm">
                    <WatchList />
                </div>
            </GeneralContextProvider>

            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<Apps />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;