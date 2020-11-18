import React from 'react'
// import '../css/style.css';
import Header from './Header.js'
import Home from './Home.js'
import Projects from './Projects.js'
import About from './About.js'
import Preloader from './Preloader.js'
import "../scss/style.scss"


export default function Portfolio() {
    
    return (
        <div className="wrapper" > 
            
            <Preloader></Preloader>
            <Header></Header>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <footer>
                <small>From scratch with <span role="img" aria-label="heart" >❤️</span></small>
            </footer>
        </div>
        
    )
    
}
