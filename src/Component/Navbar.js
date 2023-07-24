import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-center">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">Journey Jesters</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;