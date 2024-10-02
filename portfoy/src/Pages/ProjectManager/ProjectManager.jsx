import React, { useEffect, useState } from 'react'
import "./ProjectManager.css"
import { FaPlusCircle, FaRegEye, FaSearch } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5';
import ReactQuill from 'react-quill';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import AdminProjectCard from '../../Components/AdminProjectCard/AdminProjectCard';


const Modal = ({ 
    projectShow ,
    setProjectShow,
    handleClose,
    projectTitle,
    setProjectTitle,
    modules,
    content,
    setContent,
    mainImage,
    setMainImage,
    handleSubmit,
    githubUrl,
    setGithubUrl,
    friend,
    setFriend,
    friendName,
    setFriendName,
    friendİmg,
    setFriendİmg,
    friendUrl,
    setFriendUrl,
    date , 
    setDate,
    inputs, 
    setInputs,
    addInput,
    handleChange
}) => {
    
    
    if (!projectShow) {
        return null;
    }


    
    
    return (
        <>

            <div className="main-create-blog modal-overlay">
                <div className="main-create-blog-content modal-content modal-xl">
                    <div className="create-blog-header">
                        <h1>Add Projects</h1>
                        <IoCloseSharp onClick={handleClose}  className='close-i'/>
                    </div>
                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Title : </label>
                        <ReactQuill 
                            className='blog-manager-create'
                            value={projectTitle} 
                            onChange={setProjectTitle} 
                            modules={modules} 
                        />
                    </div>

                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Content : </label>
                        <ReactQuill 
                            className='blog-manager-create'
                            value={content} 
                            onChange={setContent} 
                            modules={modules} 
                        />
                    </div>
                    
                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Main Image : </label>
                        <input type="text" value={mainImage} onChange={(event)=>setMainImage(event.target.value)}/>
                    </div>

                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Project Github Url : </label>
                        <input type="text" value={githubUrl} onChange={(event)=>setGithubUrl(event.target.value)}/>
                    </div>

                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Project Github Url : </label>
                        <input type="date" value={date} onChange={(event)=>setDate(event.target.value)}/>
                    </div>

                    <div className="project-team">
                        <label  className='label' htmlFor="">proje Arkadaşı Varmı ?  </label>
                        <input type="checkbox" checked={friend} onChange={(e) => {setFriend(e.target.checked)}}/>
                    </div>
                    {
                        friend ? (<div className='friend-inputs'>
                            <div className='blog-manager-create-div'>
                                <label  className='label' htmlFor="">Friend Name : </label>
                                <input type="text" value={friendName} onChange={(event)=>setFriendName(event.target.value)}/>
                            </div>

                            <div className='blog-manager-create-div'>
                                <label  className='label' htmlFor="">Friend linkedIn Url : </label>
                                <input type="text" value={friendİmg} onChange={(event)=>setFriendİmg(event.target.value)}/>
                            </div>

                            <div className='blog-manager-create-div'>
                                <label  className='label' htmlFor="">Friend İmage : </label>
                                <input type="text" value={friendUrl} onChange={(event)=> setFriendUrl(event.target.value)}/>
                            </div>
                        </div>) : ""
                    }

                    {inputs.map((input, index) => (

                        <div className='blog-manager-create-div' key={index}>
                            <label  className='label' htmlFor="">Friend İmage : </label>
                            <input type="text" value={input} onChange={(event) => handleChange(index, event)}/>
                        </div>
                        
                    ))}

                    <button onClick={addInput}>Fotoğraf Ekle</button>

                    <button onClick={handleSubmit}>submit</button>
                    
                </div>
            </div>
    </>
);
}; 

export default function ProjectManager() {

    const [projectShow , setProjectShow] = useState(false);
    const [projectTitle , setProjectTitle] = useState('');
    const [content , setContent] = useState('');
    const [mainImage , setMainImage] = useState('');
    const [githubUrl , setGithubUrl] = useState('');
    const [friend , setFriend] = useState('');
    const [friendName , setFriendName] = useState('');
    const [friendİmg , setFriendİmg] = useState('');
    const [friendUrl , setFriendUrl] = useState('');
    const [date , setDate] = useState('');
    const [projects , setProjects] = useState('');
    const [inputs , setInputs] = useState([])


    const addInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

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
    

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', projectTitle);
        formData.append('content', content);
        formData.append('mainImage', mainImage);
        formData.append('githubUrl', githubUrl);
        formData.append('date', date);
        try {
            const response = await axios.post('http://localhost:8888/mysite/my-site-add_project.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data); // Başarı durumunu kontrol et
            setProjectShow(false)
        } catch (error) {
            console.error('Error creating post', error);
        }
    }

    const handleClose = () => {
        setProjectShow(false);
        setContent('');
        setGithubUrl('');
        setProjectTitle('');
        setMainImage('');
        setFriend(false);
        setInputs([])
    } 

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }], // Başlık stilleri
            ['bold', 'italic', 'underline'], // Kalın, İtalik, Altı Çizili
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Sıralı ve madde işaretli liste
            [{ 'color': [] }, { 'background': [] }], // Renk seçimi
            ['link', 'image', 'video'], // Bağlantı, Resim, Video ekleme
            ['clean'] // Biçimlendirmeyi kaldır
        ]
    };

    const activeProjectsCount =projects ? projects.filter(project => project.is_deleted == 0).length : 0;


    return (
        <>
            <div className="main-project-manager">
                <div className="main-project-manager-content">
                    {
                        // Blog Manager H1 title and Search block 
                    }
                    <div className="blog-manager-content-header">
                        <h1>Projects Manager</h1>
                        <div className="search">
                            <form action="">
                                <input type="text" placeholder='Search in projects...'/>
                                <button><FaSearch /></button>
                            </form>
                        </div> 
                    </div>

                    
                    <div className="blog-manager-content-posts-btns">

    
                        <h2><span style={{color:"rgb(230, 126, 34)", padding:"10px 16px" , backgroundColor:"rgba(230, 125, 34, 0.349)", borderRadius:"8px"}}>{activeProjectsCount}</span> Total Projects</h2>
                        <div className="posts-btns">
                            <button>
                                <FaPlusCircle className='posts-btn-i'/>
                                Add Category
                            </button>

                            <button>
                                <FaRegEye className='posts-btn-i' /> 
                                Get To Blog Views
                            </button>

                            <button onClick={()=>setProjectShow(true)}>
                                <FaPlusCircle className='posts-btn-i' />
                                Add a Project
                            </button>
                            <Modal 
                                projectShow={projectShow} 
                                handleClose={handleClose} 
                                modules = {modules} 
                                projectTitle = {projectTitle} 
                                setProjectTitle = {setProjectTitle} 
                                content={content} 
                                setContent={setContent} 
                                handleSubmit={handleSubmit} 
                                mainImage={mainImage}
                                setMainImage={setMainImage}
                                githubUrl = {githubUrl}
                                setGithubUrl = {setGithubUrl}
                                friend = {friend}
                                setFriend = {setFriend}
                                friendName = {friendName}
                                setFriendName = {setFriendName}
                                friendİmg = {friendİmg}
                                setFriendİmg = {setFriendİmg}
                                friendUrl = {friendUrl}
                                setFriendUrl = {setFriendUrl}
                                date = {date}
                                setDate = {setDate}
                                inputs = {inputs}
                                setInputs = {setInputs}
                                addInput={addInput}
                                handleChange={handleChange}
                            />
                            

                            <button>
                                <FaPlusCircle className='posts-btn-i' />
                                Upload a Blog
                            </button>
                        </div>

                    </div>

                    <div className="blog-manager-content-blogs-list">
                        {
                            projects != null && projects.length > 0 ? projects.map((project) => {
                                if (project.is_deleted == 0) {
                                    return <AdminProjectCard
                                        key = {project.id}
                                        project_id = {project.project_id}
                                        project_title = {project.project_title}
                                        project_content = {project.project_content}
                                        project_github_url = {project.project_github_url}
                                        project_date = {project.project_date}
                                        project_main_img = {project.project_main_img}
                                        project_img_id={project.project_img_id}
                                        friend_id={project.friend_id}
                                        setProjectShow = {setProjectShow}
                                        setProjectTitle={setProjectTitle}
                                        setContent={setContent}
                                        setGithubUrl={setGithubUrl}
                                        setDate={setDate}
                                        setMainImage={setMainImage}
                                        projects = {projects}
                                        setProjects = {setProjects}
                                    />
                                }
                                else {
                                    return ""
                                }
                            }) : <Loading />
                        }
                    </div>




                </div>
            </div>
        </>
    )
}
