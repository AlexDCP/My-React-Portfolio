import React from "react";

const navPad = {
    paddingTop: 150,
}


function About() {
    return (
        <div className="container" style={navPad}>
        <h1 className="text-center fw-bolder">About Me:</h1>
        <figure className="col-lg-6 offset-lg-3 d-flex align-items-center">
            <img src="./images/portrait.jpg" className="img-thumbnail rounded" alt="portrait"></img>
            <figcaption className="figure-caption p-2">-Myself(left) and Christopher Sabat(right) at '22 Rosecity
                Comic Con</figcaption>
        </figure>

        <div className="bg-secondary">
            <p className="my-4 fw-bold fs-6">
                My name is Alex Marriott, a 28 year old on his path to becoming a web developer.
                I have worked a variety of jobs, but nothing has quite called to me the way that
                working with code has. One day I hope to be an impactful part to any project I set my mind to.
                <br/>
                <br/>
                I have always had some interest in computers, going back to building PCs with my father as a child.
                Then discovering Linux, it felt like a whole new realm of computing had unlocked for me in 2003 and I
                had only just begun my journey with technology. My first websites were very simple photo albums my
                father
                and I set up for family members. While my involvement was small, my wonder was huge. I have known for a
                long time
                that computers and helping develop with them would bring me the most joy in my career.
                <br/>
                <br/>
                All that said, I am your typical "nerd" in my hobbies. I enjoy gaming, from video-games all the way to
                table top.
                Reading, music and comedy are also common outlets for me, but so is the outdoors and traveling to new
                places. I have
                worked as a tree marker, a job that requires a lot of physical exertion all the way to a property
                manager that requires
                involvement in every day to day activity and on the fly decision making that a business could need. I
                mention all this show where a
                lot of my inspiration is pulled from, and my constant want to experience more in life. Hopefully one day
                I can add
                something memorable from my career in coding as well!
            </p>
        </div>
    </div>
    );
}

export default About;