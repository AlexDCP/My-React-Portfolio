import React from "react";

const navPad = {
    paddingTop: 150,
}

function Skills () {
    return (
        <div style={navPad}>
        <div className="container">
            <h1 className="my-4 fw-bolder">My Skills:</h1>
            <div className="row justify-content-md-center">
                <div className="col-md-6 m-2 p-2 bg-secondary ">
                    <p className="text-center">HTML/CSS</p>
                </div>
                <div className="col-md-6 m-2 p-2 bg-secondary">
                    <p className="text-center">JavaScript</p>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-6 m-2 p-2 bg-secondary">
                    <p className="text-center">Express/Node</p>
                </div>
                <div className="col-md-6 m-2 p-2 bg-secondary">
                    <p className="text-center">MySQL/Mongo</p>
                </div>
            </div>
            <h2 className="my-4 fs-1 fw-bolder">My Certificates/Links</h2>
            <div className="row justify-content-md-center">
                <div className="col-md-6 m-2 p-2 bg-primary">
                    <p className="text-center">FullStack Certificate</p>
                </div>
                <div className="col-md-6 m-2 p-2 bg-primary">
                    <p className="text-center">GitHub</p>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-6 m-2 p-2 bg-primary">
                    <p className="text-center">LinkedIn</p>
                </div>
                <div className="col-md-6 m-2 p-2 bg-primary">
                    <p className="text-center">Resume</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;