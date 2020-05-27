import React, {useState} from 'react'
import logo from "../photo/logo.svg"
import resume from "../photo/resume.pdf"

export default function Header(){
    const [ isOpen, setOpener ] = useState(false);
    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <img src= {logo} alt="" srcSet="" />
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
                        <p>Web Developer</p>
                        <p>Portfolio</p>
                        <div className="links">
                            <a href={resume} target="__blank"> resume</a> 
                            <a href="https://github.com/kitharvey" target="__blank"> github</a>
                            <a className="touch" href="mailto:kitharveycaubalejo@gmail.com" target="__blank" > email</a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>

       
    )
}