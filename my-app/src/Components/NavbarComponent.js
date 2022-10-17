import React from 'react'
import {Link} from "react-router-dom";

export default function NavbarComponent() {
    return (
<nav class="navbar navbar-expand-lg fixed-top navbar-light">
    <div className="container-fluid container">
        <a className="navbar-brand font-signature" href="/">Cools Hadrien
        </a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
                <Link
                className='nav-link active custom-font'
                aria-current='page'
                to="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item custom-font">
            <Link
                className='nav-link active'
                to="/about">
                    About
                </Link>
            </li>

        </ul>
        </div>
    </div>
    </nav>
    )
}
