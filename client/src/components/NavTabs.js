import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Order
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/manage" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Manage
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/StripeContainer" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Pay
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Sign-Up" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Sign Up
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Login" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Login
                </Link>
            </li>
        </ul>
    )
}

export default NavTabs;

