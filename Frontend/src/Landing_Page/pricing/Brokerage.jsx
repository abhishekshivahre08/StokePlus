// import React from 'react'

// function Brokerage() {
//     return (
//         <div className="container">
//             <div className="row p-5 mt-5 text-center abhi8 border-top">
//                 <div className="col-8 mt-5">
//                   <a href=""> <h3>brokerage calculator</h3></a> 
//                   <ul style={{textAlign :"left", lineHeight:"2.5" }} className='text-muted'>
//                     <li>Call & Trade and RMS auto-squareoff:Additional charge of ₹50 + GST per Order. </li>
//                     <li>Digital contact notes will be sent via e-mail.</li>
//                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
//                    <li>For NRI account (non-PIS), 0.5% ot ₹100 per executed order for equity (whichever is lover). </li>
//                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed listed of ₹20 per executed order.</li>
//                   </ul>
//                 </div>
//                 <div className="col-4 mt-5">
//                         <a href=""> <h3>List of calculator</h3></a> 
//                 </div>
//             </div>
//         </div>


//     );
// }

// export default Brokerage;

import React from 'react'

function Brokerage() {
    return (
        <div className="container p-3 p-md-5">
            <div className="row p-3 p-md-5 mt-5 border-top">
                
                {/* Left side: Main Content */}
                {/* Mobile par 12 (Full), Laptop par 8 */}
                <div className="col-12 col-md-8 mt-4">
                    <a href="#" className="text-decoration-none"> 
                        <h3 className="fs-4 mb-4 text-center text-md-start">Brokerage calculator</h3>
                    </a> 
                    
                    <ul style={{ lineHeight: "2.2" }} className='text-muted fs-6 ps-3 ps-md-0'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charge of ₹50 + GST per Order.</li>
                        <li>Digital contact notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.</li>
                    </ul>
                </div>

                {/* Right side: List link */}
                {/* Mobile par full width aur text center */}
                <div className="col-12 col-md-4 mt-4 text-center text-md-end">
                    <a href="#" className="text-decoration-none"> 
                        <h3 className="fs-4">List of calculators</h3>
                    </a> 
                </div>

            </div>
        </div>
    );
}

export default Brokerage;