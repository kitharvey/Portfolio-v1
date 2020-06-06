import React from 'react'
import sort from '../photo/sort.jpg'
import crow from '../photo/crow.jpg'
import path from '../photo/path.jpg'

export default function Projects(){
    const style = {
        textTransform: 'uppercase'
    }
    return(
        <div id="projects">
            <p style={style}>projects</p>
            <div className="proj-one" >
                <a className = "details" href="https://kitharvey.github.io/Sort-Animation/" target="__blank">
                    <h1>Sort Visualizer</h1>
                    <small>Sorting Algorithms Visualizer Applet</small>
                </a>
                <div className = "dropdown">
                    <img src={sort} alt="sort visualizer screenshot"/>
                </div>
                
            </div>
            <div className="proj-two" >
                <a className = "details" href="https://kitharvey.github.io/coffee-ecommerce/" target="__blank">
                    <h1>Cockcrow</h1>
                    <small>Coffee Company E-commerce Website</small>
                </a>
                <div className = "dropdown">
                    <img src={crow} alt="cockcrow screenshot"/>
                </div>
                
            </div>
            <div className="proj-three" >
                <a className = "details" href="https://kitharvey.github.io/Pathfinder/" target="__blank">
                    <h1>Pathfinder</h1>
                    <small>A* Search Algorithm Visualizer</small>
                </a>
                <div className = "dropdown">
                    <img src={path} alt="pathfinder screenshot"/>
                </div>
                
            </div>
        </div>
    )
}