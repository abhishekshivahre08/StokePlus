

import React from 'react'

function Hero() {
    return (
        <section className="container-fluid py-5" id="SupportHero" style={{ backgroundColor: "#387ed1", color: "white" }}>
            {/* Header Section: Mobile par text-center laptop par space-between */}
            <div className="container d-flex flex-wrap justify-content-between align-items-center mb-5 px-3">
                <h3 className="fs-4 fw-bold">Support Portal</h3>
                <a href="#" className="text-white text-decoration-underline">Track Tickets</a>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left side: Search & Quick Links */}
                    <div className="col-12 col-md-7 mb-5 mb-md-0 px-3">
                        <h1 className='fs-4 mb-4 fw-normal'>
                            Search for an answer or browse help topics to create a ticket
                        </h1>
                        
                        {/* Styled Search Input */}
                        <div className="mb-4">
                            <input 
                                type="text"
                                className="form-control form-control-lg border-0 rounded-1" 
                                placeholder="Eg: how do I activate F&O." 
                                style={{ height: "55px", fontSize: "1.1rem" }}
                            />
                        </div>

                        {/* Quick Links with Spacing */}
                        <div className="d-flex flex-wrap gap-3 mt-3 support-links">
                            <a href="#" className="text-white text-decoration-underline me-3">Track account opening</a>
                            <a href="#" className="text-white text-decoration-underline me-3">Track segment activation</a>
                            <a href="#" className="text-white text-decoration-underline me-3">Intraday margins</a>
                            <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
                        </div>
                    </div>

                    {/* Right side: Featured Section */}
                    <div className="col-12 col-md-5 px-3 ps-md-5">
                        <h1 className='fs-4 mb-4 fw-normal'>Featured</h1>
                        <ol className="lh-lg">
                            <li className="mb-3">
                                <a href="#" className="text-white text-decoration-underline">
                                    Current Takeovers and Delisting - January 2026
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-underline">
                                    Latest intraday leverages - MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;