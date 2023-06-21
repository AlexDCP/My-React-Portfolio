import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top p-2">
        <div className="navbar-brand">Alex C. Marriott</div>
        <div className="" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;