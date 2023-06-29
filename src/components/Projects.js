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
            <h1 className="text-center fw-bolder">My Projects:</h1>
            <div className="row justify-content-md-center align-items-center">
                <div className="col-md-4 mr-auto p-2" >
                    <a href="https://github.com/sethleininger/FoodSearch">
                    <img src="./images/food-search-screenshot.JPG" className="img-thumbnail rounded float-start" alt="food-search"></img>
                    </a>
                </div>
                <div className="col-md-4 mr-auto p-2 ">
                    <a href="https://github.com/rhodemc/tacod">
                    <img src="./images/tacod.png" className="img-thumbnail rounded float-end" alt="taco-d"></img>
                    </a>
                </div>
            </div>
            <div className="row justify-content-md-center align-items-center" style={projPad}>
                <div className="col-md-4 mr-auto p-2">
                    <a href="https://github.com/AlexDCP/Tech-Blog">
                    <img src="./images/tech-blog.JPG" className="img-thumbnail rounded float-start" alt="tech-blog"></img>
                    </a>
                </div>
                <div className="col-md-4 mr-auto p-2">
                    <a href="https://github.com/AlexDCP/Weather-Forecast">
                    <img src="./images/weather-forecast-scr.JPG" className="img-thumbnail rounded float-end" alt="weather-forecast"></img>
                    </a>
                </div>
            </div>
            <div className="row justify-content-md-center align-items-center" style={projPad}>
                <div className="col-md-4 mr-auto p-2">
                    <a href="https://github.com/AlexDCP/README-template">
                    <img src="./images/readme-gen.jpg" className="img-thumbnail rounded float-start" alt="readme-gen"></img>
                    </a>
                </div>
                <div className="col-md-4 mr-auto p-2">
                    <a href="https://github.com/AlexDCP/Coding-Quiz">
                    <img src="./images/jsquiz.JPG" className="img-thumbnail rounded float-end" alt="js-quiz"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;