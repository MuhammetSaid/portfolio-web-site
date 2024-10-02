import React from 'react'
import "./EducationCard.css"

export default function EducationCard(
    { 
        education_img , 
        education_name , 
        education_grade ,
        education_department,
        education_start,
        education_end,
        education_gpa
    }) {
    return (
        <>
            <div className="main-education-card">
                <div className="main-education-card-content">
                    <div className="education-card-img">
                        <img src={education_img} alt="" />
                    </div>
                    <div className="education-card-text">
                        <h2>{education_name}</h2>
                        <p>{education_grade}.Sınıf, {education_department}</p>
                        <p>{education_start} - {education_end}</p>
                        <p>GPA : {education_gpa}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
