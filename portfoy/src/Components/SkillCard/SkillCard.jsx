import React, { useState } from 'react'
import "./SkillCard.css"
export default function SkillCard({
    key,
    skill_name,
    skill_img,
    skill_disc,
    skill_certificate,
    skill_deleted,
    skill_evaluation
}) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        
        <>
            <div className="main-skill-card">
                <div className="main-skill-card-content">
                    <div className="skill-card-img">
                        <img src={skill_img} alt="" />
                    </div>
                    <div className="skill-card-text">
                        <h2>{skill_name}</h2>
                        <p className={isExpanded ? '' : 'text-clamp'}>{skill_disc}</p>
                        <button onClick={toggleReadMore} className='read-more'>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
