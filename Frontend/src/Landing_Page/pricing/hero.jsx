

import React from 'react'

function Hero() {
    return (
        <div className="container p-3 p-md-5">
            {/* Header Section */}
            <div className="row text-center border-bottom mb-5 py-5">
                <h1 className='display-4 fw-bold'>Charges</h1>
                <p className='text-muted fs-4 mb-4'>List of all charges and taxes</p>
            </div>

            {/* Pricing Cards Section */}
            <div className="row text-center">
                {/* Mobile: 12 (Full), Tablet: 6 (Half), Laptop: 4 (One-Third) */}
                <div className="col-12 col-sm-6 col-md-4 p-4 p-lg-5">
                    <img src="assets/pricing0.svg" className="img-fluid mb-4" alt="Free Equity" style={{ maxWidth: "200px" }} />
                    <h2 className="fs-3">Free equity delivery</h2>
                    <p className='fs-6 text-muted mt-3'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-4 p-lg-5">
                    <img src="assets/intradayTrades.svg" className="img-fluid mb-4" alt="Intraday Trades" style={{ maxWidth: "200px" }} />
                    <h2 className="fs-3">Intraday and F&O trades</h2>
                    <p className='fs-6 text-muted mt-3'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
                    </p>
                </div>

                {/* Mobile: 12 (Full - niche aayega), Laptop: 4 */}
                <div className="col-12 col-sm-12 col-md-4 p-4 p-lg-5">
                    <img src="assets/pricing0.svg" className="img-fluid mb-4" alt="Free Direct MF" style={{ maxWidth: "200px" }} />
                    <h2 className="fs-3">Free direct MF</h2>
                    <p className='fs-6 text-muted mt-3'>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;