import React from 'react'
import resume from "../photo/resume.pdf"

export default function Home(){
    return (
        <div id="home">
        <div className="main-text">
            <p className="greet">Hi, my name is</p>
            <h1 className="name">Kit Harvey Caubalejo.</h1>
            <p className="des">I'm a front-end web developer.</p>
            <p className="line">I taught myself how to code and design for web. Now I found my passion and I'm putting it to work.</p>
        </div>
        <div className="main-buttons-container">
            <div className="main-buttons">
                <a href={resume} target="__blank">resume</a> 
            </div>
            <div className="main-buttons">
                <a href="https://github.com/kitharvey" target="__blank">github</a>
            </div>
            <div className="main-buttons">
                <a href="mailto:kitharveycaubalejo@gmail.com" target="__blank" >email</a>
            </div>
            <div className="main-buttons">
                <a href="https://www.linkedin.com/in/kitharvey/" target="__blank" >linkedin</a>
            </div>
        </div>
    </div>
    )
}