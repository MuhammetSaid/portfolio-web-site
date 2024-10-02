import React, { useState } from 'react'
import "./AdminNavbar.css"
import { NavLink } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'

export default function AdminNavbar({setAdmin , setAdminID}) {
    return (
        <>
            <div className="admin-navbar">
                <ul>
                    <li><NavLink to = {"/admin"}><div className='span-menu'></div><span>Statistics</span></NavLink></li>
                    <li><NavLink to = {"/admin/dashboard"}><div className='span-menu'></div><span>Main Dashboard</span> </NavLink></li>
                    <li><NavLink to = {"/admin/project_manager"}><div className='span-menu'></div><span>Projects Manager</span> </NavLink></li>
                    <li><NavLink to = {"/admin/blog_manager"}><div className='span-menu'></div><span> Blogs Manager</span></NavLink></li>
                    <li><NavLink to = {"/admin/course_manager"}><div className='span-menu'></div><span>Courses Manager</span> </NavLink></li>
                    <li><NavLink to = {"/admin/chat"}><div className='span-menu'></div><span>Chat</span> </NavLink></li>
                    <li><NavLink to = {"/admin/ui_designer"}><div className='span-menu'></div><span>UI Design Managment</span> </NavLink></li>
                </ul>
                <button onClick={() => {setAdmin("pasif") ; setAdminID("")}} className='logout-btn'><FaSignOutAlt className='logout-i' style={{color:"gray"}}/> LogOut</button>
            </div>
        </>
    )
}
