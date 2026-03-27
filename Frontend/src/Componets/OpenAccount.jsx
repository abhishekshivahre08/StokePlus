// import React from 'react'

// function OpenAccount() {
//     return (
//         <div className="container p-5 mb-5  ">
//             <div className="row text-center  ">
//                 <h1 className='mb-4 '>Open a StokePulse account</h1>
//                 <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
//                 <a
//                     href="https://aapka-dashboard-link.netlify.app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="start-btn"
//                 >
//                     <button className='p-3 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "auto" }}>Start Now</button>
//                 </a>


//             </div>

//         </div>
//     );
// }

// export default OpenAccount;

import React from 'react'

function OpenAccount() {
    return (
        <div className="container p-3 p-md-5 my-5">
            <div className="row text-center justify-content-center">
                <div className="col-12 col-md-8">
                    {/* Responsive Heading */}
                    <h1 className='mb-4 fw-bold' style={{ fontSize: 'calc(1.4rem + 1.2vw)' }}>
                        Open a StockPulse account
                    </h1>
                    
                    {/* Responsive Text */}
                    <p className="text-muted fs-5 mb-4">
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    
                    {/* Centralized Action Button */}
                    <div className="d-flex justify-content-center">
                        <a
                            href="http://localhost:3000/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none w-100"
                        >
                            {/* Mobile par 75% width, Laptop par 25% */}
                            <button 
                                className='btn btn-primary fs-5 p-3 w-75 w-md-25 shadow-sm'
                            >
                                Start Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;