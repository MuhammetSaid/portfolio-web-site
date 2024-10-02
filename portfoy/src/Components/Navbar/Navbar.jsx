import React, { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import "./Navbar.css";
import { NavLink, useNavigate } from 'react-router-dom';
import TlfNavbar from '../TlfNavbar/TlfNavbar';

export default function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [tlfMenu , setTlfMenu] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        // Burada "/details" rotasına yönlendirme yapılır, post.id ile dinamik URL de oluşturabilirsiniz.
        navigate("/" );
    };
    useEffect(() => {
        localStorage.setItem('theme' , theme);
        
    },[theme])

    const toggleTheme =() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        
        if (theme === 'light') {
            document.documentElement.style.setProperty('--bg-color', '#0a1117');
            document.documentElement.style.setProperty('--text-color', '#ECF0F1');
            document.documentElement.style.setProperty('--input-color', '#2e2e2e');
        } else {
            document.documentElement.style.setProperty('--primary-color', '#E67E22');
            document.documentElement.style.setProperty('--seconder-color', '#F39C12');
            document.documentElement.style.setProperty('--bg-color', '#e3e3e3');
            document.documentElement.style.setProperty('--text-color', '#0a1117');
            document.documentElement.style.setProperty('--primary-hover-color', '#e67d22cd');
            document.documentElement.style.setProperty('--third-color', '#D4AF37');
            document.documentElement.style.setProperty('--input-color', '#c0c0c0');
        }
    }, [theme]);

    return (
        <div className='main-navbar'>
            
            <div className="navbar-content">
                
                <div className="tlf-menu">
                    <button onClick={() => {setTlfMenu(!tlfMenu) ; console.log(tlfMenu)}}><FaBars /></button>
                    {
                        tlfMenu ? <TlfNavbar setTlfMenu={setTlfMenu}/> : ""
                    }
                </div>
                <div className="navbar-logo" onClick={handleClick}>
                    <img src={require("../../Assets/logo.png")} alt="" />
                    <img src={require("../../Assets/logoAd.png")} alt="" />
                </div>
                <div className="navbar-search">
                    <input type="search" placeholder='Searh...'/>
                    <FaSearch className='search-i'/>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about_me"}>About Me</NavLink></li>
                        <li><NavLink to={"/projects"}>Projects</NavLink></li>
                        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
                        <li><NavLink to={"/courses"}>Courses</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                    <button
                        onClick={toggleTheme} 
                        className={theme === 'light' ? 'dark-icon' : "dark-icon light"} 
                    >
                        {theme === 'light' ? <FaMoon className='dark'/> : <FaSun className='dark'/>}
                    </button>
                </div>
            </div>
        </div>
    );
}
