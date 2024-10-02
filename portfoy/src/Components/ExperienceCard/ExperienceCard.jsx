import React, { useEffect, useState } from 'react'

import "./ExperienceCard.css"

export default function ExperienceCard({
    key,
    experience_kurum,
    experience_img,
    experience_when,
    experience_start,
    experience_end,
    experience_skills,
    experience_pozition
}) {
    const [experience_skill , setExperience_skill] = useState([])
    useEffect(() => {
        const arr_skills = experience_skills.split('-')
        setExperience_skill(arr_skills)
    },[])
    return (

        <>
            <div className="main-experience-card">
                <div className="main-experience-card-content">
                    <div className="experience-img">
                        <img src={experience_img} alt="" />
                    </div>
                    <div className="experience-text">
                        <h1>{experience_kurum}</h1>

                        <h4>{experience_when} , {experience_pozition} </h4>
                        <p>{experience_start} - {experience_end}  </p>
                        <div className="experience-skills">
                        {
                            experience_skill.map((skill) => {
                                return <p>{skill}</p>
                            })
                        }
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
