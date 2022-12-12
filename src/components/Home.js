import React from "react";

// need to import video for video tag to work 
// should look something like: 
// <-------  import videoBg from '../sk8.mp4' --------->


function Home() {
    return (
        <div>

            <video autoPlay loop muted>
                {/* <source src={videoBg} type="video/mp4" /> */}
            </video>

            <div className="about">
                <p className="homepar">
                    <strong> WE BRING YOU MUSIC</strong>
                </p>
            </div>
        </div>
    )
}

export default Home;