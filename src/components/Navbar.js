import React from "react";

function Navbar({handlePageChange}) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top p-2">
        <div className="navbar-brand">Alex C. Marriott</div>
        <div className="" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#about"
                    onClick={() => handlePageChange('About')}
                    >
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    >
                    Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills"
                    onClick={() => handlePageChange('Skills')}
                    >
                    Skills
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    >
                    Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;