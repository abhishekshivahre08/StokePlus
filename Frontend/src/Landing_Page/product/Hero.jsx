import React from 'react'

function Hero() {
    return (
        <div className="container">
            <div className="row mt-5 p-5 mb-5 text-center border-bottom">
                <h1 className='fs-3'>StokePulse Products</h1>
                <p className='fs-4 mt-1'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-5'>Check out our <a href="" style={{ textDecoration: "none" }} > investment offerings → </a></p>
            </div>
        </div>
    );
}

export default Hero;