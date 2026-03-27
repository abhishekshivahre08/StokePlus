

import React from 'react'

function Team() {
    return (
        <div className="container abhi2 p-3 p-md-5">
            {/* Heading Section */}
            <div className="row border-top mt-5">
                <h1 className='text-center fs-2 mt-5 mb-5 fw-bold'>People</h1>
            </div>

            <div className="row align-items-center">
                {/* Left Side: Photo & Designation */}
                {/* Mobile: col-12 (full width), Laptop: col-md-6 */}
                <div className="col-12 col-md-6 mt-2 text-center">
                    <img 
                        src="assets/abhiimg.png" 
                        alt="Abhishek Shivhare" 
                        className="img-fluid mb-4"
                        style={{ 
                            width: "250px", 
                            height: "250px", 
                            borderRadius: "50%", 
                            objectFit: "cover" 
                        }} 
                    />
                    <h2 className='fs-4 fw-bold'>Abhishek Shivhare</h2>
                    <p className='fs-6 text-muted'>Founder, CEO</p>
                </div>

                {/* Right Side: Bio & Links */}
                <div className="col-12 col-md-6 mt-4 mt-md-0 fs-6 text-muted px-4 px-md-2">
                    <p>
                        Abhishek Shivhare founded <strong>StockPulse</strong> in 2025 to overcome the hurdles he faced during his journey. Today, StockPulse has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    
                    <div className="mt-3">
                        Connect on: 
                        <a href="/" className="ms-2 text-decoration-none">Homepage</a> / 
                        <a href="#" className="ms-2 text-decoration-none">TradingQnA</a> / 
                        <a href="#" className="ms-2 text-decoration-none">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
