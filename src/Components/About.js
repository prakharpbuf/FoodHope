import React from "react"
import TextArea from "./TextArea"
import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"




function AboutImage(props){
    const aboutImage = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "25%",
        backgroundImage: "url(" + props.imageName + ")"
    }
    return(
        <div style={aboutImage} className="aboutImage">

        </div>
    )
}

function About() {
    return (
        <div className="about" id="about">
            <TextArea 
            title="Welcome to our site!" 
            description= "We provide emotional and practical support for families who have been sleeping empty stomachs for as long as they can remember. We aim to provide food to everyone out there who are in need through this intreface." 
            className = "about-text"
            /> 
            <AboutImage imageName={about1}/>
            <TextArea
            title="About us"
            description="Our vision is for all families who are in need to be provided with food through various restaurants and social gatherings who are willing to donate and also to reduce the amount of food wastage."
            className="about-text"
            />
            <AboutImage imageName={about2} />
        </div>
    )
}

export default About