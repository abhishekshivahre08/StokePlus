

import React from 'react'

function Education() {
   return (
      <div className="container p-3 p-md-5 mt-5">
         <div className="row align-items-center">
            {/* Left side - Image */}
            {/* Mobile par full width (12), Laptop par half (6) */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
              <img src="assets/education.svg" className="img-fluid" alt="Education Illustration" style={{ maxWidth: "90%" }} />
            </div>

            {/* Right side - Content */}
            <div className="col-12 col-md-6 px-3 px-md-5">
               <h1 className="mb-4 fs-2">Free and open market education</h1>
               
               <p className='text-muted'>
                  Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
               </p>
               <a href="#" className="text-decoration-none fw-bold">
                  Varsity <i className="fa-solid fa-arrow-right-long ms-2"></i>
               </a>

               <p className='mt-5 text-muted'>
                  TradingQ&A, the most active trading and investment community in India for all your market related queries.
               </p>
               <a href="#" className="text-decoration-none fw-bold">
                  TradingQ&A <i className="fa-solid fa-arrow-right-long ms-2"></i>
               </a>
            </div>
         </div>
      </div>
   );
}

export default Education;