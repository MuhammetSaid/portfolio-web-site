import React, { useEffect, useState } from 'react'

import "./Projects.css"
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import ProjectMainCard from '../../Components/ProjectMainCard/ProjectMainCard';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default function Projects() {
    const [projects , setProjects] = useState('');
    useEffect(() => {
        window.scroll(0,0) 
    },[]) 
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8888/mysite/my-site-get_projects.php');
                setProjects(response.data); // Yazıları state'e kaydet
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchProjects(); // Yazıları getir
    }, [projects]);

    return (
        <div className='main-projects'>
            <div className="main-projects-content">
                <div className="projects-page-image">

                </div>
                <div className="projects-page-istatistics">
                    <div className="projects-page-istatistics-content">
                        <div className="h1">
                            <h1>1+</h1>
                            <h2>Project</h2>
                        </div>
                        <div className="h1">
                            <h1>1+</h1>
                            <h2>Project</h2>
                        </div>
                        <div className="h1">
                            <h1>1+</h1>
                            <h2>Project</h2>
                        </div>
                    </div>
                </div>
                <ProjectMainCard />

                <div className="projects-cards">
                    {
                        projects ? projects.map((project) => {
                            return <ProjectCard />
                        }) : ""
                    }
                </div>
            </div>
        </div>
    )
}
