import React, { useEffect, useState } from 'react';
import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import HomeCard from '../../Components/HomeCard/HomeCard';
import { FaBrain, FaBriefcase, FaCertificate, FaCode, FaGraduationCap, FaUserEdit } from 'react-icons/fa';
import EducationCard from '../../Components/EducationCard/EducationCard';
import SkillCard from '../../Components/SkillCard/SkillCard';
import Certificates from '../../Components/Certificates/Certificates';
import ProblemSolvingCard from '../../Components/ProblemSolvingCard/ProblemSolvingCard'; // Yükleme yapıldı
import axios from 'axios';
import ExperienceCard from '../../Components/ExperienceCard/ExperienceCard';
import Loading from '../../Components/Loading/Loading';
import { useNavigate } from 'react-router';



export default function Home({ education, skills, certificates, experiences, totalVisits , posts}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const title_create = (title) => {
        return title
            .toLowerCase()
            .replace(/<\/?[^>]+(>|$)/g, "") // HTML etiketlerini kaldırır
            .replace(/\s+/g, "-")           // Boşlukları tire ile değiştirir
            .replace(/[^\w-]+/g, "");
    }
    useEffect(() => {
        window.scroll(0,0) 
    },[])

    useEffect(() => {
        axios.get('http://localhost:8888/mysite/leetcode.php') // PHP dosyanın URL'si
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError("Error fetching data");
            });
    }, []);

    const [stats, setStats] = useState([]);
    

    return (
        <>
        <div className="main-home">
            <div className="main-home-content">
                <div className="main-home-content-section1">
                    <HomeCard />
                </div>


                <div className="education aaa">
                    <div className="education-content">
                        <div className="education-title">
                            <FaGraduationCap className='i' />
                            <h1>Education</h1>
                        </div>
                        {
                            education.map((edu) => (
                                <EducationCard
                                    key={edu.education_id}
                                    education_img={edu.education_img}
                                    education_name={edu.education_name}
                                    education_grade={edu.education_grade}
                                    education_department={edu.education_department}
                                    education_start={edu.education_start}
                                    education_end={edu.education_end}
                                    education_gpa={edu.education_gpa}
                                />
                            ))
                        }
                    </div>
                    <div className="circle"></div>
                </div>


                <div className="skills education">
                    <div className="skills-content education-content">
                        <div className="education-title">
                            <FaCode className='i' />
                            <h1>Skills</h1>
                        </div>
                        <div className="skills-cards">
                        {
                            skills != null && skills.length > 0 ? (
                                skills.map((skill) => (
                                skill.skill_deleted !== 1 && (
                                    <SkillCard
                                    key={skill.skill_id}
                                    skill_name={skill.skill_name}
                                    skill_img={skill.skill_img}
                                    skill_disc={skill.skill_disc}
                                    skill_certificate={skill.skill_certificate}
                                    skill_deleted={skill.skill_deleted}
                                    skill_evaluation={skill.skill_evaluation}
                                    />
                                )
                                ))
                            ) : (
                                <Loading />
                            )
                        }
                        </div>
                    </div>
                    <div className="circle"></div>
                </div>


                <div className="certificates education">
                    <div className="certificates-content education-content">
                        <div className="education-title">
                            <FaCertificate className='i' />
                            <h1>Certificates</h1>
                        </div>
                        <div className="certificates-cards">
                            {certificates.map((certificate) => (
                                certificate.certificate_deleted !== 1 && (
                                    <Certificates
                                        key={certificate.certificate_id}
                                        certificate_name={certificate.certificate_name}
                                        certificate_kurum={certificate.certificate_kurum}
                                        certificate_date={certificate.certificate_date}
                                        certificate_img={certificate.certificate_img}
                                        certificate_url={certificate.certificate_url}
                                        certificate_skills={certificate.certificate_skills}
                                        certificate_deleted={certificate.certificate_deleted}
                                        certificate_kurum_img={certificate.certificate_kurum_img}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                    <div className="circle"></div>
                </div>


                <div className="problem-solving education">
                    <div className="problem-solving-content education-content">
                        <div className="education-title">
                            <FaBrain className='i' />
                            <h1>Problem Solving</h1>
                        </div>
                        {
                            data ? <div className="problem-solving-cards">
                            
                            <ProblemSolvingCard
                                name="LeetCode"
                                img="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                totalSolving={data.totalSolved}
                                easySolving={data.easySolved}
                                mediumSolving={data.mediumSolved}
                                hardSolving={data.hardSolved}
                                profile_url = {"https://leetcode.com/u/Muhammet_said/"}
                            />
                        
                            <ProblemSolvingCard
                                name="Hackerrank"
                                img="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
                                totalSolving={0}
                                easySolving={0}
                                mediumSolving={0}
                                hardSolving={0}
                                profile_url = {"https://leetcode.com/u/Muhammet_said/"}

                            />
                            <ProblemSolvingCard
                                name="Geeks For Geeks"
                                img="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                                totalSolving={0}
                                easySolving={0}
                                mediumSolving={0}
                                hardSolving={0}
                                profile_url = {"https://leetcode.com/u/Muhammet_said/"}
                            />
                    </div> : <Loading />
                        }
                    </div>
                    <div className="circle"></div>
                </div>

                <div className="experience education">
                    <div className="experience education-content">
                        <div className="education-title">
                            <FaBriefcase className='i' />
                            <h1>Experience</h1>
                        </div>
                        <div className="experience-cards">
                            {
                                experiences.map((experience) => {
                                    return <ExperienceCard 
                                        key = {experience.experience_id}
                                        experience_kurum = {experience.experience_kurum}
                                        experience_img = {experience.experience_img}
                                        experience_when = {experience.experience_when}
                                        experience_start = {experience.experience_start}
                                        experience_end = {experience.experience_end}
                                        experience_skills = {experience.experience_skills}
                                        experience_pozition = {experience.experience_pozition}
                                    />
                                })
                            }
                        </div>
                    </div>
                    <div className="circle"></div>
                </div>


                <div className="main-blog-home">
                    <div className="main-blog-home-content">
                        <h1> Blogs <FaUserEdit className='blog-i'/></h1>
                        <div class="blogs-container">
                            {
                                posts ? posts.map((post) => {
                                    if (post.is_deleted == 0 && post.post_is_main == 1) {
                                        return  <div className='blogs-container-card-l-main' onClick={() => navigate("/blog/" + title_create(post.title))}>
                                                    <div className="blogs-container-card-l" style={{backgroundImage:`url(${post.image})` , backgroundSize:"cover"}}></div>
                                                    <div className="blogs-cards-text">
                                                        <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                                                        <p>{post.created_by}</p>
                                                    </div>
                                                </div>
                                    }
                                }) : <Loading />
                            }
                            <div className="blogs-container-ss">
                                {
                                    posts ? posts.map((post) => {
                                        if (post.is_deleted == 0 && post.post_is_main == 2) {
                                            return  <div className='blogs-container-card-s-main' onClick={() => navigate("/blog/" + title_create(post.title))}>
                                                        <div className="blogs-container-card-s" style={{backgroundImage:`url(${post.image})` , backgroundSize:"cover"}} onClick={() => navigate("/blog/" + title_create(post.title))} ></div> 
                                                        <div className="blogs-cards-text">
                                                            <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                                                            <p>{post.created_by}</p>
                                                        </div>
                                                    </div>
                                            
                                            
                                        }
                                    }) : <Loading />
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className="main-project-home">
                    <div className="main-project-home-content">
                        <h1> Projects <FaUserEdit className='project-i'/> </h1>
                    </div>
                </div>


            </div>

            <div className="sus1 sus"></div>
            <div className="sus2 sus"></div>
            <div className="sus3 sus"></div>
        </div>
        </>
    );
}
