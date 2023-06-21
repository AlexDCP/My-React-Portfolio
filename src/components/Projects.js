import React from "react";


function Projects() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mr-auto p-2" >
                    <img src="./images/food-search-screenshot.JPG" className="img-thumbnail rounded float-start" alt="food-search"></img>
                </div>
                <div className="col-md-6 mr-auto p-2">
                    <img src="./images/tacod.png" className="img-thumbnail rounded float-end" alt="taco-d"></img>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 mr-auto p-2">
                    <img src="./images/tech-blog.JPG" className="img-thumbnail rounded float-start" alt="tech-blog"></img>
                </div>
                <div className="col-md-6 mr-auto p-2">
                    <img src="./images/weather-forecast-scr.JPG" className="img-thumbnail rounded float-end" alt="weather-forecast"></img>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 mr-auto p-2">
                    <img src="./images/readme-gen.jpg" className="img-thumbnail rounded float-start" alt="readme-gen"></img>
                </div>
                <div className="col-md-6 mr-auto p-2">
                    <img src="./images/jsquiz.JPG" className="img-thumbnail rounded float-end" alt="js-quiz"></img>
                </div>
            </div>
        </div>
    );
}

export default Projects;