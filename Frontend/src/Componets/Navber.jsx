import React from 'react'
import {Link} from "react-router-dom";


function Navber() {
    return (
        <nav class="navbar navbar-expand-lg border"
            style={{ backgroundColor: " #ffffff" }}>
            <div class="container ">
                <Link class="navbar-brand" to="/">
                    <img src="assets\logo.jpeg" alt="LOGO" style={{ width: "185px" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                            {/* <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li> */}
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/product">Product</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
                            </li>
                               {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Login">Log in</Link>
                            </li> */}



                        </ul>
                    </form>
                </div>
            </div>
        </nav>






    );
}

export default Navber;
