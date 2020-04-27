import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    LaboraSocial
                </Link>
                <nav>
                    <Link to="/login">Log out</Link>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
