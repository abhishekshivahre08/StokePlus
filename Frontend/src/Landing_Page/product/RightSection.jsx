

import React from 'react'

function RightSection({
    productName,
    productDescription,
    imageURL,
    learnMore,
}) {
    return (
        <div className="container p-3 p-md-5 my-5">
            <div className="row align-items-center">
                
                {/* Text Section: Laptop par left (order-1), Mobile par niche (order-2) */}
                <div className="col-12 col-md-6 order-2 order-md-1 px-3 px-md-5 mt-4 mt-md-0">
                    <h1 className="fw-bold mb-3" style={{ fontSize: 'calc(1.5rem + 1vw)' }}>
                        {productName}
                    </h1>
                    <p className="text-muted fs-5 mb-4">{productDescription}</p>
                    <div>
                        <a href={learnMore} className="text-decoration-none fw-bold">
                            Learn More <i className="fa-solid fa-arrow-right-long ms-2"></i>
                        </a>
                    </div>
                </div>

                {/* Image Section: Laptop par right (order-2), Mobile par upar (order-1) */}
                <div className="col-12 col-md-6 order-1 order-md-2 text-center">
                    <img 
                        src={imageURL} 
                        className="img-fluid" 
                        alt={productName} 
                        style={{ maxWidth: "85%" }} 
                    />
                </div>
                
            </div>
        </div>
    );
}

export default RightSection;