import React from "react";

const navPad = {
    paddingTop: 150,
}

const projPad = {
    paddingTop: 50,
}

function Projects() {
    return (
        <div style={navPad}>
            <div className="row justify-content-md-center align-items-center">
                <div className="col-md-4 mr-auto p-2" >
                    <img src="./images/food-search-screenshot.JPG" className="img-thumbnail rounded float-start" alt="food-search"></img>
                </div>
                <div className="col-md-4 mr-auto p-2 ">
                    <img src="./images/tacod.png" className="img-thumbnail rounded float-end" alt="taco-d"></img>
                </div>
            </div>
            <div className="row justify-content-md-center align-items-center" style={projPad}>
                <div className="col-md-4 mr-auto p-2">
                    <img src="./images/tech-blog.JPG" className="img-thumbnail rounded float-start" alt="tech-blog"></img>
                </div>
                <div className="col-md-4 mr-auto p-2">
                    <img src="./images/weather-forecast-scr.JPG" className="img-thumbnail rounded float-end" alt="weather-forecast"></img>
                </div>
            </div>
            <div className="row justify-content-md-center align-items-center" style={projPad}>
                <div className="col-md-4 mr-auto p-2">
                    <img src="./images/readme-gen.jpg" className="img-thumbnail rounded float-start" alt="readme-gen"></img>
                </div>
                <div className="col-md-4 mr-auto p-2">
                    <img src="./images/jsquiz.JPG" className="img-thumbnail rounded float-end" alt="js-quiz"></img>
                </div>
            </div>
        </div>
    );
}

export default Projects;