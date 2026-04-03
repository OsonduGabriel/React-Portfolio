import React from "react";
import { FaDownload } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import profileImg from "../assets/headshot.jpg"

function Hero({title, stack, openModal}){
    return(
        <>
            <div className="hero_icon">
                <img src={profileImg} alt="Osondu Gabriel - Frontend Web Developer" />
                <h2>{title} <span className="code_icon"><BsCodeSlash /></span></h2>
            </div>

            <div className="tech_stack_container">
                <p className="tech_stack">{stack}</p>
            </div>
            <div className="btn_container">
                <a href="/Osondu_Gabriel_CV.pdf" download="Osondu_Gabriel_CV.pdf" className="btn_cv" aria-label="Download my CV as PDF">Download CV <FaDownload /></a>
                <button className="btn_hire" onClick={openModal}>Hire Me</button>
            </div>
        </>
    )
    
}

export default Hero