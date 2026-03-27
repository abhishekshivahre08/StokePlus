

import React from 'react'

function Universe() {
    return (
        <div className="container mt-5 p-3 p-md-5">
            <div className="row text-center justify-content-center">
                <div className="col-12 col-md-10">
                    <h1 className="fw-bold mb-3" style={{ fontSize: 'calc(1.5rem + 1vw)' }}>
                        The StockPulse Universe
                    </h1>
                    <p className="text-muted fs-5">
                        Extend your trading and investment experience even further with our partner platforms
                    </p>
                </div>

                {/* Partner Cards Section */}
                {/* Mobile: col-12, Tablet: col-6, Laptop: col-4 */}
                <div className="col-12 col-sm-6 col-md-4 p-4 mt-4">
                    <img src="assets/zerodhaFundhouse.png" style={{ width: "150px" }} alt="Fundhouse" />
                    <p className="text-small text-muted mt-3 px-2">
                        Our asset management venture that is creating simple and transparent index funds.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-4 mt-4">
                    <img src="assets/sensibullLogo.svg" style={{ width: "150px" }} alt="Sensibull" />
                    <p className="text-small text-muted mt-3 px-2">
                        Options trading platform that lets you analyze positions and examine data points.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-4 mt-4">
                    <img src="assets/tijori.svg" style={{ width: "150px" }} alt="Tijori" />
                    <p className="text-small text-muted mt-3 px-2">
                        Investment research platform that offers detailed insights on stocks and sectors.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-4 mt-4">
                    <img src="assets/streakLogo.png" style={{ width: "150px" }} alt="Streak" />
                    <p className="text-small text-muted mt-3 px-2">
                        Systematic trading platform that allows you to create and backtest strategies.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-4 mt-4">
                    <img src="assets/smallcaseLogo.png" style={{ width: "150px" }} alt="Smallcase" />
                    <p className="text-small text-muted mt-3 px-2">
                        Thematic investing platform that helps you invest in diversified baskets of stocks.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 p-4 mt-4">
                    <img src="assets/dittoLogo.png" style={{ width: "150px" }} alt="Ditto" />
                    <p className="text-small text-muted mt-3 px-2">
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="col-12 mt-5 text-center">
                    <a
                        href="https://aapka-dashboard-link.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-inline-block w-100"
                    >
                        {/* Mobile par wide button, Laptop par sleek */}
                        <button className='btn btn-primary fs-5 p-3 w-75 w-md-25 mb-5 shadow-sm'>
                            Start Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Universe;