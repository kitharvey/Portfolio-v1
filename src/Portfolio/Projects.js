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
        <a className="proj-one" href="https://kitharvey.github.io/Sort-Animation/" target="__blank">
            <h1>Sort Visualizer</h1>
            <small>Sorting Algorithms Visualizer Applet</small>
            <img src={sort} alt="sort visualizer screenshot"/>
        </a>
        <a className="proj-two" href="https://kitharvey.github.io/coffee-ecommerce/" target="__blank">
            <h1>Cockcrow</h1>
            <small>Coffee Company E-commerce Website</small>
            <img src={crow} alt="cockcrow screenshot"/>
        </a>
        <a className="proj-three" href="https://kitharvey.github.io/Pathfinder/" target="__blank">
            <h1>Pathfinder</h1>
            <small>A* Search Algorithm Visualizer</small>
            <img src={path} alt="pathfinder screenshot"/>
        </a>
    </div>
    )
}