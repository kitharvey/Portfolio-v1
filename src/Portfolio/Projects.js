import React from 'react'
import sort from '../photo/sort.jpg'
import crow from '../photo/crow.jpg'
import path from '../photo/path.jpg'
import fx from '../photo/fx.jpg'
import gif from '../photo/gifascii.jpg'

export default function Projects(){
    const style = {
        textTransform: 'uppercase'
    }

    const data = [
        {
            title: "Sort Visualizer",
            subtitle: "Sorting Algorithms Visualizer Applet",
            link: "https://kitharvey.github.io/Sort-Animation/",
            repo: "https://github.com/kitharvey/Sort-Animation",
            img: sort,
        },
        {
            title: "Cockcrow",
            subtitle: "Coffee Company E-commerce Website",
            link: "https://kitharvey.github.io/cockcrow/",
            repo: "https://github.com/kitharvey/cockcrow",
            img: crow,
        },
        {
            title: "Pathfinder",
            subtitle: "A* Search Algorithm Visualizer",
            link: "https://kitharvey.github.io/Pathfinder/",
            repo: "https://github.com/kitharvey/Pathfinder",
            img: path,
        },
        {
            title: "FX Daily Forecast",
            subtitle: "FX API Data Presentation",
            link: "https://kitharvey.github.io/fx-daily-forecast/",
            repo: "https://github.com/kitharvey/fx-daily-forecast",
            img: fx,
        },
        {
            title: "ASCII GIF Converter",
            subtitle: "GIF Rendered each Frame in ASCII",
            link: "https://kitharvey.github.io/gif-to-ascii/",
            repo: "https://github.com/kitharvey/gif-to-ascii",
            img: gif,
        },
    ]
    return(
        <div id="projects">
            <p style={style}>projects</p>
            {data.map(({title, subtitle, link, repo, img}, index) => {
                return(
                    <div className="proj-wrapper" key={index}>
                        <div className="proj" >
                            <div className = "details">
                                <h1> {title} </h1>
                                <div className="subtitles" >
                                    <small className="description" > {subtitle} </small>
                                    <a className="link" href={repo} target="__blank" > <small> repository </small> </a>
                                    <a className="link" href={link} target="__blank" > <small> website </small> </a> 
                                </div>
                            </div>
                            <div className = "dropdown">
                                <img src={img} alt="sort visualizer screenshot"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}