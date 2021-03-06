import React from 'react'
import test from '../photo/test.jpg'

export default function About(){
    const style = {
        textTransform: 'uppercase'
    }

    return (
        <div id="about">
        <p style={style}>about me</p>
        <div className="about-container">
            <img src={test} alt=""/>
            <div className="about-details">
                <div className="overview">
                    <h1>overview</h1>
                    <p>
                        Hi, I’m a Web Developer based in General Santos City, Philippines. I’m always fascinated by graphic design, typography and algorithms. Web development has given me the ability to do both design and code. I was hooked and I want to master this craft. My dream is to work with like-minded and passionate people building amazing projects.
                        When I’m away from my keyboard you can find me at the gym pumping irons, running and spending time with friends and family. I also love learning self-improvement, philosophy, finance and health and fitness. There is always room to grow.
                    </p>
                </div>
                <div className="tools">
                    <h1>tools</h1>
                    <ul>
                        <li>JavaScript/HTML/CSS/SCSS</li>
                        <li>TypeScript</li>
                        <li>TailwindCSS</li>
                        <li>React.js</li>
                        <li>GraphQL</li>
                        <li>Node.js</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>git</li>
                    </ul>
                </div>            
            </div>
        </div>
       

    </div>
    )
}