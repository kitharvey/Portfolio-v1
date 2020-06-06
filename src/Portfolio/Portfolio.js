import React from 'react'
import '../css/style.css';
import Header from './Header.js'
import Home from './Home.js'
import Projects from './Projects.js'
import About from './About.js'
import Preloader from './Preloader.js'



export default function Portfolio() {
    
    return (
        <div>
            
            <Preloader></Preloader>
            <Header></Header>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <footer>
                <small>Hope you like my Portfolio</small>
            </footer>
        </div>
        
    )
    
}
