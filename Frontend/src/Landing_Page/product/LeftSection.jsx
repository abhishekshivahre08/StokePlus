

import React from 'react'

function LeftSection({
    productName,
    productDescription,
    imageURL,
    tryDemo,
    learnMore,
    googlePlay,
    appStore }) {
    return (
        <div className="container p-3 p-md-5 my-5">
            <div className="row align-items-center">
                {/* Image Section: Mobile par upar, Laptop par left (6) */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img src={imageURL} className="img-fluid" alt={productName} style={{ maxWidth: "85%" }} />
                </div>
                
                {/* Content Section: Mobile par niche, Laptop par right (6) */}
                <div className="col-12 col-md-6 px-3 px-md-5">
                    <h1 className="fw-bold mb-3" style={{ fontSize: 'calc(1.5rem + 1vw)' }}>
                        {productName}
                    </h1>
                    <p className="text-muted fs-5 mb-4">{productDescription}</p>
                    
                    {/* Action Links */}
                    <div className="mb-4 d-flex flex-wrap gap-4">
                        <a href={tryDemo} className="text-decoration-none fw-bold">
                            Try Demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                        <a href={learnMore} className="text-decoration-none fw-bold">
                            Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                    </div>

                    {/* App Badges */}
                    <div className='d-flex flex-wrap gap-3 mt-3'>
                        <a href={googlePlay}>
                            <img src="assets/googlePlayBadge.svg" style={{ width: '130px' }} alt="Google Play" />
                        </a>
                        <a href={appStore}>
                            <img src="assets/appstoreBadge.svg" style={{ width: '130px' }} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
