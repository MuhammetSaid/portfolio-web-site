import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import "./TlfNavbar.css"
import { NavLink } from 'react-router-dom';

export default function TlfNavbar({setTlfMenu}) {
    return (
        <>
            <div className="main-tlf-navbar">
                <div className="main-tlf-navbar-content">
                    <div className="close-btn">
                        <button onClick={() => setTlfMenu(false)}>
                            <IoCloseSharp className='close-btn-i' />
                        </button>
                    </div>
                    <ul>
                        <li><NavLink onClick={() => setTlfMenu(false)} to={"/"}>Home</NavLink></li>
                        <li><NavLink onClick={() => setTlfMenu(false)} to={"/about_me"}>About Me</NavLink></li>
                        <li><NavLink onClick={() => setTlfMenu(false)} to={"/projects"}>Projects</NavLink></li>
                        <li><NavLink onClick={() => setTlfMenu(false)} to={"/blogs"}>Blogs</NavLink></li>
                        <li><NavLink onClick={() => setTlfMenu(false)} to={"/courses"}>Courses</NavLink></li>
                        <li><NavLink onClick={() => setTlfMenu(false)} to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
