

import React from 'react'

function Pricing() {
    return (
        <div className="container p-3 p-md-5 my-5">
            <div className="row align-items-center">
                {/* Left side: Mobile par 12, Laptop par 5 (thoda bada) */}
                <div className="col-12 col-md-5 mb-5 mb-md-0">
                    <h1 className="mb-4 display-5 fw-bold">Unbeatable pricing</h1>
                    <p className='text-muted fs-5'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none fw-bold">
                        See pricing <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>
                </div>

                {/* Empty Space ki jagah Offset use kiya hai (Laptop par space dega, mobile par nahi) */}
                <div className="col-md-1"></div>

                {/* Right side: Pricing Boxes */}
                <div className="col-12 col-md-6">
                    <div className="row g-0 text-center">
                        {/* Box 1 */}
                        <div className="col-12 col-sm-6 border p-4">
                            <h1 className='mb-4 text-primary'>₹0</h1>
                            <p className="text-muted">
                                Free equity delivery <br className="d-none d-md-block" /> 
                                and direct mutual funds
                            </p>
                        </div>
                        {/* Box 2 */}
                        <div className="col-12 col-sm-6 border p-4">
                            <h1 className='mb-4 text-primary'>₹20</h1>
                            <p className="text-muted">
                                Intraday and <br className="d-none d-md-block" /> 
                                F&O
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;