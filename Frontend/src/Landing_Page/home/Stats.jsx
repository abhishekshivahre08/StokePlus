// import React from 'react'

// function Stats() {
//     return (
//         <div className="container p-3">
//             <div className="row p-5" >
//                 {/* left side */}
//                 <div className="col-6 p-5">
//                     <h1 className='fs-5 mb-5'>Trust with confidence</h1>
//                     <h2 className='fs-4'>Customer-first always</h2>
//                     <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
//                     </p>
//                     <h2 className='fs-4'>No spam or gimmicks</h2>
//                     <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
//                     <h2 className='fs-4'>The Zerodha universe</h2>
//                     <p className='text-muted'>
//                         Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
//                     </p>
//                     <h2 className='fs-4'>Do better with money</h2>
//                     <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
//                 </div>
//                 {/* right side */}
//                 <div className="col-6 ">
//                     <img src=".\assets\ecosystem.png" style={{ width: "90%" }} />
//                     <div className='text-center '>
//                         <a href="" className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
//                         <a href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     );
// }

// export default Stats;

import React from 'react'

function Stats() {
    return (
        <div className="container p-3 p-md-5 mt-5">
            <div className="row align-items-center">
                {/* Left side: Content - Mobile par 12, Laptop par 6 */}
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className='fs-2 mb-5 fw-bold'>Trust with confidence</h1>
                    
                    <h2 className='fs-4 mt-4'>Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker.
                    </p>
                    
                    <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace.
                    </p>
                    
                    <h2 className='fs-4 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services.
                    </p>
                    
                    <h2 className='fs-4 mt-4'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we actively help you do better with your money.
                    </p>
                </div>

                {/* Right side: Image & Links - Mobile par 12, Laptop par 6 */}
                <div className="col-12 col-md-6 text-center">
                    <img 
                        src="assets/ecosystem.png" 
                        className="img-fluid mb-4" 
                        style={{ width: "90%" }} 
                        alt="Ecosystem"
                    />
                    <div className='d-flex flex-wrap justify-content-center gap-3'>
                        <a href="#" className='text-decoration-none fw-bold'>
                            Explore our products <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                        <a href="#" className='text-decoration-none fw-bold'>
                            Try Kite demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
