import React, {useEffect, useState} from 'react'
import Logo from '../photo/Logo';
import resume from "../photo/resume.pdf"

export default function Header(){
    const [ isOpen, setOpener ] = useState(false);
    const theme = localStorage.getItem('theme')
    const [themeState, setThemeState] = useState(theme ? theme : 'light')

    useEffect(() => {
        themeState === 'light' ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')
        themeState === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    }, [themeState])

    const handleToggle = () => {
        themeState === 'light' ? setThemeState('dark') : setThemeState('light')
    }

    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <Logo />
                </div>

                <div className="burger" onClick={()=>setOpener(!isOpen)}>
                    <span className= {`line ${isOpen ? " open": ""}`} ></span>
                </div>

                <div className={`menu-container ${isOpen ? " open": ""}`} >
                    <div className="menu">
                        <a className="nav-items" onClick={()=>setOpener(!isOpen)} href="#home"> Home </a>
                        <a className="nav-items" onClick={()=>setOpener(!isOpen)} href="#projects"> Projects </a>
                        <a className="nav-items" onClick={()=>setOpener(!isOpen)} href="#about"> About </a>
                    </div>
                    <div className="port">
                        <h1>Kit Harvey Caubalejo</h1>
                        <p>Front-End Web Developer</p>
                        <p>Portfolio</p>
                        <div className="links">
                            <a href={resume} target="__blank"> resume</a> 
                            <a href="https://github.com/kitharvey" target="__blank"> github</a>
                            <a className="touch" href="mailto:kitharveycaubalejo@gmail.com" target="__blank" > email</a>
                        </div>
                        <div className="theme" onClick={handleToggle} >switch to {themeState} mode</div>
                    </div>
                    
                </div>
                
            </div>
        </div>

       
    )
}