import React from "react";

const navPad = {
    paddingTop: 150,
}

function Footer () {
    return (
<footer className="page-footer font-small blue pt-4 sm:fixed-bottom" style={navPad}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-white">Quick Links:</h5>
                <p className="text-white">You can access my GitHub/LinkedIn account from the icons down here!</p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
            <a href="https://github.com/AlexDCP">
                <img src="./images/github-mark.png" className="icon rounded-circle"  alt="github"></img>
            </a>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
            <a href="#">
                <img src="./images/LI-In-Bug.png" className="icon rounded-circle"  alt="github"></img>
            </a>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">© 2023 Copyright:
        <a href="https://github.com/AlexDCP">Alex Marriott</a>
    </div>

</footer>
    )
};

export default Footer;