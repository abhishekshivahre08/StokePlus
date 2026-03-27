

import React from 'react'

function Awards() {
    return (
        // Mobile par padding kam (p-3) aur badi screen par zyada (md-p-5)
        <div className='container mt-5 p-3 p-md-5'>
            <div className="row align-items-center"> {/* Vertically center karne ke liye */}
                
                {/* Mobile par 12 columns (Full Width), Laptop par 6 columns */}
                <div className='col-12 col-md-6 mb-4 mb-md-0'>
                    <img src="assets/largestBroker.svg" alt="brokerimg" className="img-fluid" />
                </div>

                <div className='col-12 col-md-6'>
                    <h1 style={{ fontSize: 'calc(1.3rem + 1vw)' }}>Largest stock broker in India</h1>
                    <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily...</p>
                    
                    <div className="row">
                        {/* Lists ko bhi mobile par thoda space dein */}
                        <div className="col-6">
                            <ul className="ps-3">
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="ps-3">
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Image ko responsive banane ke liye img-fluid class use karein */}
                    <img src="assets/pressLogos.png" className="img-fluid mt-3" style={{ maxWidth: "90%" }} alt="press logos" />
                </div>
            </div>
        </div>
    );
}

export default Awards;