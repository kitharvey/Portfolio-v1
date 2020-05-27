import React, {useState, useEffect} from 'react'
import '../css/style.css';
import Header from './Header.js'
import Home from './Home.js'
import Projects from './Projects.js'
import About from './About.js'



export default function Portfolio() {
    const [ spinner, setSpinner ] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, []);


    if (spinner) return (
        <div className="preloader-container">
            <div className="preloader"></div>
        </div>
    )

    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Projects></Projects>
            <About></About>

            <footer>
                <small>Forged by Kit Harvey Caubalejo</small>
            </footer>
        </div>
        
    )
    
}
