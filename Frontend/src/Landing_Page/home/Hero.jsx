

import React from 'react'

function Hero() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center justify-content-center">
        {/* img-fluid se image screen ke hisaab se resize hogi */}
        <div className="col-12">
          <img 
            src="assets/homeHero.png" 
            alt="Hero Image" 
            className='img-fluid mb-4' 
            style={{ maxHeight: "400px" }} // Image zyada badi na ho jaye
          />
        </div>

        <div className="col-12 col-md-8">
          <h1 className='mt-4' style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>
            Invest in everything
          </h1>
          <p className="fs-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds and more
          </p>
          
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            {/* Mobile par 60% aur Laptop par 25% width */}
            <button 
              className='btn btn-primary fs-5 mt-3 mb-5 w-75 w-md-25 p-3'
            >
              Start Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;