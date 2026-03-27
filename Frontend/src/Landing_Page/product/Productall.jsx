

import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function Productall() {
    return (
        <div className="overflow-hidden"> {/* Horizontal scroll prevent karne ke liye */}
            <Hero />
            
            {/* Saare sections ke beech consistent gap dene ke liye container styles use karenge */}
            <LeftSection
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                imageURL="assets/kite.png"
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" 
            />
            
            <RightSection
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                imageURL="assets/console.png"
                learnMore="" 
            />
            
            <LeftSection
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                imageURL="assets/coin.png"
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" 
            />
            
            <RightSection
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                imageURL="assets/kiteconnect.png"
                learnMore="" 
            />
            
            <LeftSection
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                imageURL="assets/varsity.png"
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" 
            />
            
            {/* Tech Stack Text: Isko responsive banaya gaya hai */}
            <div className="container py-5">
                <p className='text-center fs-4 fs-md-3 px-3 text-muted'>
                    Want to know more about our technology stack? 
                    <br className="d-none d-md-block" /> 
                    Check out the <a href="#" className="text-decoration-none">StockPulse.tech</a> blog.
                </p>
            </div>

            <Universe />
        </div>
    );
}

export default Productall;