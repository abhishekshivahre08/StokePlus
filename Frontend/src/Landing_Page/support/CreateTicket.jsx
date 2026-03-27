

import React from 'react'

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-3 p-md-5 mt-5 mb-5 abhi9">
                <h1 className='fs-2 mb-5 text-center text-md-start'>To create a ticket, select a relevant topic</h1>

                {/* Account Opening */}
                <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2" style={{ lineHeight: "2.5" }}>
                    <h4 className="fs-5 fw-bold"><i className="fa-solid fa-circle-plus me-2"></i>Account Opening</h4>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-decoration-none py-1">Online Account Opening</a>
                        <a href="#" className="text-decoration-none py-1">Offline Account Opening</a>
                        <a href="#" className="text-decoration-none py-1">Company, Partnership and HUF</a>
                        <a href="#" className="text-decoration-none py-1">NRI Account Opening</a>
                        <a href="#" className="text-decoration-none py-1">Charges at StockPulse</a>
                        <a href="#" className="text-decoration-none py-1">StockPulse IDFC 3-in-1</a>
                    </div>
                </div>

                {/* Your Account */}
                <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2" style={{ lineHeight: "2.5" }}>
                    <h4 className="fs-5 fw-bold"><i className="fa-solid fa-person me-2"></i>Your Account</h4>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-decoration-none py-1">Login Credentials</a>
                        <a href="#" className="text-decoration-none py-1">Account Modification</a>
                        <a href="#" className="text-decoration-none py-1">DP ID and Bank Details</a>
                        <a href="#" className="text-decoration-none py-1">Your Profile</a>
                        <a href="#" className="text-decoration-none py-1">Transfer of Shares</a>
                    </div>
                </div>

                {/* Trading and Platforms */}
                <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2" style={{ lineHeight: "2.5" }}>
                    <h4 className="fs-5 fw-bold"><i className="fa-solid fa-chart-line me-2"></i>Trading & Platforms</h4>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-decoration-none py-1">Margin and Order types</a>
                        <a href="#" className="text-decoration-none py-1">Kite Web and Mobile</a>
                        <a href="#" className="text-decoration-none py-1">Trading FAQs</a>
                        <a href="#" className="text-decoration-none py-1">Corporate Actions</a>
                        <a href="#" className="text-decoration-none py-1">Kite API</a>
                        <a href="#" className="text-decoration-none py-1">GTT</a>
                    </div>
                </div>

                {/* Funds */}
                <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2" style={{ lineHeight: "2.5" }}>
                    <h4 className="fs-5 fw-bold"><i className="fa-solid fa-money-bill me-2"></i>Funds</h4>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-decoration-none py-1">Adding Funds</a>
                        <a href="#" className="text-decoration-none py-1">Funds Withdrawal</a>
                        <a href="#" className="text-decoration-none py-1">eMandates</a>
                        <a href="#" className="text-decoration-none py-1">Adding Bank Accounts</a>
                    </div>
                </div>

                {/* Console */}
                <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2" style={{ lineHeight: "2.5" }}>
                    <h4 className="fs-5 fw-bold"><i className="fa-brands fa-xbox me-2"></i>Console</h4>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-decoration-none py-1">Reports</a>
                        <a href="#" className="text-decoration-none py-1">Ledger</a>
                        <a href="#" className="text-decoration-none py-1">Portfolio</a>
                        <a href="#" className="text-decoration-none py-1">60 Day Challenge</a>
                        <a href="#" className="text-decoration-none py-1">IPO</a>
                        <a href="#" className="text-decoration-none py-1">Referral Program</a>
                    </div>
                </div>

                {/* Coin */}
                <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2" style={{ lineHeight: "2.5" }}>
                    <h4 className="fs-5 fw-bold"><i className="fa-solid fa-coins me-2"></i>Coin</h4>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-decoration-none py-1">Understanding Mutual Funds</a>
                        <a href="#" className="text-decoration-none py-1">About Coin</a>
                        <a href="#" className="text-decoration-none py-1">Buying and Selling</a>
                        <a href="#" className="text-decoration-none py-1">Starting an SIP</a>
                        <a href="#" className="text-decoration-none py-1">Managing Portfolio</a>
                        <a href="#" className="text-decoration-none py-1">Government Securities</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;