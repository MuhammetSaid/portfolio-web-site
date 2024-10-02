// MainDashboard.js
import React, { useState } from 'react';
import './MainDashboard.css';
import { FaBookOpen, FaBriefcase, FaCertificate, FaCode, FaPlusCircle, FaSearch } from 'react-icons/fa';
import axios from 'axios';

export default function MainDashboard({ education, setEducation, skills, setSkills, certificates, setCertificates , experiences , setExperiences}) {
    const [addEducation, setAddEducation] = useState(false);
    const [addSkill, setAddSkill] = useState(false);
    const [addCertificate, setAddCertificate] = useState(false);
    const [addExperience, setAddExperience] = useState(false);

    const [newEducation, setNewEducation] = useState({
        education_img: '',
        education_name: '',
        education_grade: '',
        education_department: '',
        education_start: '',
        education_end: '',
        education_gpa: '',
    });

    const [newSkill, setNewSkill] = useState({
        skill_img: '',
        skill_name: '',
        skill_disc: '',
        skill_evaluation: '',
    });

    const [newExperience, setNewExperience] = useState({
        experience_kurum: '',
        experience_img: '',
        experience_when: '',
        experience_start: '',
        experience_end: '',
        experience_skills: '',
        experience_pozition: '',
    });

    const [newCertificate, setNewCertificate] = useState({
        certificate_name: '',
        certificate_kurum: '',
        certificate_date: '',
        certificate_img: '',
        certificate_url: '',
        certificate_skills: '',
        certificate_kurum_img: '',
    });



    const handleChangeCertificate = (e) => {
        setNewExperience({ ...newCertificate, [e.target.name]: e.target.value });
    };

    const handleChangeExperience = (e) => {
        setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
    };

    const handleChangeSkill = (e) => {
        setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
    };


    const handleChange = (e) => {
        setNewEducation({ ...newEducation, [e.target.name]: e.target.value });
    };

    // Submit Add Funcitions

    const submitEducation = async () => {
        try {
        const response = await axios.post('http://localhost:8888/mysite/my-site-add_education.php', newEducation, {
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.data.success) {
            setEducation([...education, response.data.education]); // Eğitimi güncelleyerek listeye ekle
            setAddEducation(false)
            setNewEducation({
                education_img: '',
                education_name: '',
                education_grade: '',
                education_department: '',
                education_start: '',
                education_end: '',
                education_gpa: '',
            })
            
        } else {
            console.log('An error occurred. Please try again.')
        }
        } catch (error) {
            console.error('Error submitting education:', error);
        }
    };

    const submitExperience = async () => {
        try {
        const response = await axios.post('http://localhost:8888/mysite/my-site-add_experience.php', newExperience, {
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.data.success) {
            setExperiences([...experiences, response.data.experiences]); // Eğitimi güncelleyerek listeye ekle
            setAddExperience(false)
            setNewExperience({
                experience_kurum: '',
                experience_img: '',
                experience_when: '',
                experience_start: '',
                experience_end: '',
                experience_skills: '',
                experience_pozition: '',
            })
            
        } else {
            console.log('An error occurred. Please try again.')
        }
        } catch (error) {
            console.error('Error submitting experience:', error);
        }
        console.log(newExperience)
    };

    const submitSkill = async () => {
        try {
            const response = await axios.post('http://localhost:8888/mysite/my-site-add_skill.php', newSkill, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.data.success) {
                setSkills([...skills, response.data.skill]); // Veri isimlendirmesi 'skill' olmalı
                setAddSkill(false);
                setNewSkill({
                    skill_img: '',
                    skill_name: '',
                    skill_disc: '',
                    skill_evaluation: '',
                });
            } else {
                console.log('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting skill:', error);
        }
    };

    const submitCertificate = async () => {
        try {
            const response = await axios.post('http://localhost:8888/mysite/my-site-add_certificate.php', newCertificate, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.data.success) {
                setCertificates([...certificates, response.data.certificate]); // Veri isimlendirmesi 'skill' olmalı
                setAddCertificate(false);
                setNewCertificate({
                    certificate_name: '',
                    certificate_kurum: '',
                    certificate_date: '',
                    certificate_img: '',
                    certificate_url: '',
                    certificate_skills: '',
                    certificate_kurum_img: '',
                });
            } else {
                console.log('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting certificate:', error);
        }
    };

    return (
        <div className="main-dashboard">
            <div className="main-dashboard-content">
                <div className="main-dashboard-manager-content-header">
                    <h1>Main Dashboard</h1>
                        <div className="search">
                        <form action="">
                            <input type="text" placeholder="Search in Dashboard..." />
                            <button>
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="dashboard-education">
                <div className="dashboard-edu-header">
                    <h2>
                    <FaBookOpen className="admin-edu-i" /> Education Management
                    </h2>
                    <button onClick={() => setAddEducation(!addEducation)}>
                    <FaPlusCircle className="posts-btn-i" />
                    Add Education
                    </button>
                </div>
                <div className="dashboard-edu-content">
                    <div className="custom-table-container">
                    <table className="custom-table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Department</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>GPA</th>
                        </tr>
                        </thead>
                        <tbody>
                        {education.map((edu) => (
                            <tr key={edu.education_id}>
                            <td>{edu.education_id}</td>
                            <td>{edu.education_img}</td>
                            <td>{edu.education_name}</td>
                            <td>{edu.education_grade}</td>
                            <td>{edu.education_department}</td>
                            <td>{edu.education_start}</td>
                            <td>{edu.education_end}</td>
                            <td>{edu.education_gpa}</td>
                            </tr>
                        ))}

                        {addEducation && (
                            <tr>
                            <td></td>
                            <td>
                                <input
                                type="text"
                                name="education_img"
                                value={newEducation.education_img}
                                onChange={handleChange}
                                className="edu-img-input edu-input"
                                />
                            </td>
                            <td>
                                <input
                                type="text"
                                name="education_name"
                                value={newEducation.education_name}
                                onChange={handleChange}
                                className="edu-name-input edu-input"
                                />
                            </td>
                            <td>
                                <input
                                type="number"
                                name="education_grade"
                                value={newEducation.education_grade}
                                onChange={handleChange}
                                className="edu-grade-input edu-input"
                                />
                            </td>
                            <td>
                                <input
                                type="text"
                                name="education_department"
                                value={newEducation.education_department}
                                onChange={handleChange}
                                className="edu-department-input edu-input"
                                />
                            </td>
                            <td>
                                <input
                                type="text"
                                name="education_start"
                                value={newEducation.education_start}
                                onChange={handleChange}
                                className="edu-start-input edu-input"
                                />
                            </td>
                            <td>
                                <input
                                type="text"
                                name="education_end"
                                value={newEducation.education_end}
                                onChange={handleChange}
                                className="edu-end-input edu-input"
                                />
                            </td>
                            <td>
                                <input
                                type="text"
                                name="education_gpa"
                                value={newEducation.education_gpa}
                                onChange={handleChange}
                                className="edu-gpa-input edu-input"
                                />
                            </td>
                            </tr>
                        )}

                        {addEducation && (
                            <tr>
                            <td colSpan={8}>
                                <button onClick={submitEducation}>Submit</button>
                            </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>

        
                <div className="dashboard-education dashboard-skills">
                <div className="dashboard-edu-header dashboard-skills-header">
                    <h2><FaCode className='admin-edu-i'/> Skills Managment</h2>
                    <button  onClick={() => setAddSkill(!addSkill)}><FaPlusCircle className='posts-btn-i'/>Add Education</button>
                </div>
                <div className="dashboard-edu-content">
                    <div className="custom-table-container">
                        <table className="custom-table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Discription</th>
                                <th>Evaluation</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    skills.map((skill) => {
                                        return <tr>
                                        <td>{skill.skill_id}</td>
                                        <td>{skill.skill_img}</td>
                                        <td>{skill.skill_name}</td>
                                        <td>{skill.skill_disc}</td>
                                        <td>{skill.skill_evaluation}</td>
                                        
                                        
                                    </tr>
                                    })
                                }

                                {
                                    addSkill ? <tr>
                                    <td></td>
                                        <td>
                                            <input
                                            type="text"
                                            name="skill_img"
                                            value={newSkill.skill_img}
                                            onChange={handleChangeSkill}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="skill_name"
                                            value={newSkill.skill_name}
                                            onChange={handleChangeSkill}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="skill_disc"
                                            value={newSkill.skill_disc}
                                            onChange={handleChangeSkill}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="skill_evaluation"
                                            value={newSkill.skill_evaluation}
                                            onChange={handleChangeSkill}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                </tr> : ""
                                }
                                {
                                    addSkill ? <button onClick={submitSkill}>submit</button>: ""
                                
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>


                <div className="dashboard-education dashboard-certificates">
                <div className="dashboard-edu-header dashboard-certificates-header">
                    <h2><FaCertificate className='admin-edu-i'/> Certificates Managment</h2>
                    <button onClick={() => setAddCertificate(!addCertificate)}><FaPlusCircle className='posts-btn-i'/>Add Certificate</button>
                </div>
                <div className="dashboard-edu-content">
                    <div className="custom-table-container">
                        <table className="custom-table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Kurum</th>
                                <th>Date</th>
                                <th>İmage</th>
                                <th>Url</th>
                                <th>Skills</th>
                                <th>kurum_image</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    certificates.map((certificate) => {
                                        return <tr>
                                        <td>{certificate.certificate_id}</td>
                                        <td>{certificate.certificate_name}</td>
                                        <td>{certificate.certificate_kurum}</td>
                                        <td>{certificate.certificate_date}</td>
                                        <td>{certificate.certificate_img}</td>
                                        <td>{certificate.certificate_url}</td>
                                        <td>{certificate.certificate_skills}</td>
                                        <td>{certificate.certificate_kurum_img}</td>
                                        
                                        
                                    </tr>
                                    })
                                }

{
                                    addCertificate ? <tr>
                                    <td></td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_name"
                                            value={newCertificate.certificate_name}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_kurum"
                                            value={newCertificate.certificate_kurum}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_date"
                                            value={newCertificate.certificate_date}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_img"
                                            value={newCertificate.certificate_img}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_url"
                                            value={newCertificate.certificate_url}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_skills"
                                            value={newCertificate.certificate_skills}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="certificate_kurum_img"
                                            value={newCertificate.certificate_kurum_img}
                                            onChange={handleChangeCertificate}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                </tr> : ""
                                }
                                {
                                    addCertificate ? <button onClick={submitCertificate}>submit</button>: ""
                                
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>


                <div className="dashboard-education dashboard-experience">
                <div className="dashboard-edu-header dashboard-experience-header">
                    <h2><FaBriefcase className='admin-edu-i'/> Experience Managment</h2>
                    <button onClick={() => setAddExperience(!addExperience)}><FaPlusCircle className='posts-btn-i'/>Add Experience</button>
                </div>
                <div className="dashboard-edu-content">
                    <div className="custom-table-container">
                        <table className="custom-table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Kurum</th>
                                <th>img</th>
                                <th>When</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>skills</th>
                                <th>Position</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    experiences.map((experience) => {
                                        return <tr>
                                        <td>{experience.experience_id ? experience.experience_id : ""}</td>
                                        <td>{experience.experience_kurum}</td>
                                        <td>{experience.experience_img}</td>
                                        <td>{experience.experience_when}</td>
                                        <td>{experience.experience_start}</td>
                                        <td>{experience.experience_end}</td>
                                        <td>{experience.experience_skills}</td>
                                        <td>{experience.experience_pozition}</td>
                                        
                                        
                                    </tr>
                                    })
                                }

                                {
                                    addExperience ? <tr>
                                    <td></td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_kurum"
                                            value={newExperience.experience_kurum}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_img"
                                            value={newExperience.experience_img}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_when"
                                            value={newExperience.experience_when}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_start"
                                            value={newExperience.experience_start}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_end"
                                            value={newExperience.experience_end}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_skills"
                                            value={newExperience.experience_skills}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            name="experience_pozition"
                                            value={newExperience.experience_pozition}
                                            onChange={handleChangeExperience}
                                            className="edu-img-input edu-input"
                                            />
                                        </td>
                                </tr> : ""
                                }
                                {
                                    addExperience ? <button onClick={submitExperience}>submit</button>: ""
                                
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>

                
            </div>
        </div>
    );
}
