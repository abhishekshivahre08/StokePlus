// import React from 'react'

// function Hero() {
//     return (
//         <div className="container abhi">
//             <div className="row p-5 mt-5 mb-5" >
//                 <h1 className='fs-4 text-center'>We pioneered the discount broking model in India.
//                     <br />
//                     Now, we are breaking ground with our technology. </h1>
//             </div>
//             <div className="row p-5 mt-5 border-top  text-muted" style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
//                 <div className="col-6">
//                     <p >We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company  StokePulse, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
//                     <br />
//                     <p >Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.  </p>
//                     <br />
//                     <p > Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
//                 </div>
//                 <div className="col-6">
//                     <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.  </p>
//                     <br />
//                     <p ><a href=""> Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.   </p>
//                     <br />
//                     <p > And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="">blog</a> or see what the media is <a href="">saying about</a> us or learn more about our business and producta
//                     <a href=""> philosophies</a>.</p> 
//                      </div>
//             </div>
//             </div>
      
//     );
// }

// export default Hero;

import React from 'react'

function Hero() {
    return (
        <div className="container abhi">
            {/* Main Heading Section */}
            <div className="row p-3 p-md-5 mt-5 mb-5 text-center">
                <h1 className='fs-2 fw-normal' style={{ lineHeight: "1.4" }}>
                    We pioneered the discount broking model in India.
                    <br className="d-none d-md-block" />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>

            {/* Content Section */}
            <div className="row p-3 p-md-5 mt-5 border-top text-muted" 
                 style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                
                {/* Left Column: Mobile 12, Laptop 6 */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company <strong>StockPulse</strong>, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className="mt-4">
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p className="mt-4">
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                {/* Right Column: Mobile 12, Laptop 6 */}
                <div className="col-12 col-md-6">
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className="mt-4">
                        <a href="#" className="text-decoration-none">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className="mt-4">
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#" className="text-decoration-none">blog</a> or see what the media is <a href="#" className="text-decoration-none">saying about</a> us or learn more about our business and product <a href="#" className="text-decoration-none">philosophies</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;