import React, { useEffect, useState } from 'react'

import "./Certificates.css"

export default function Certificates({ 
    certificate_name,
    certificate_kurum,
    certificate_date,
    certificate_img,
    certificate_url,
    certificate_skills,
    certificate_deleted,
    certificate_kurum_img
}) {
    const [certificate_skill , setCertificate_skill] = useState([])
    useEffect(() => {
        const arr_skills = certificate_skills.split('-')
        setCertificate_skill(arr_skills)
    },[])
    return (
        <>
            <div className="main-certificates">
                <h2 style={{marginLeft:"20px"}}>{certificate_name}</h2>
                <div className="main-certificates-content">
                    
                    <div className="certificates-img">
                        <div className="certificates-img-image" style={{backgroundImage:`url(${certificate_img})`, backgroundSize:"cover"}}>
                        </div>
                        <div className="certificates-img-kurum">
                            <img src={certificate_kurum_img} alt="" />
                            <p>{certificate_kurum}, </p>
                            <p> {certificate_date}</p>
                        </div>
                    </div>
                    <div className="certificates-text">
                        {
                            certificate_skill.map((skill) => {
                                return <h4>{skill}</h4>
                            })
                        }
                    </div>
                </div>
                <a href={certificate_url} target='_blank' className='da'>ziyaret et</a>
            </div>
        </>
    )
}
