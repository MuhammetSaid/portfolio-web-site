import React, { useState } from 'react'
import "./AdminProjectCard.css"
import DeleteModal from '../DeleteModal/DeleteModal';
export default function AdminProjectCard({ 
    project_id,
    project_title , 
    project_content , 
    project_github_url , 
    project_date , 
    project_main_img , 
    post_created_by , 
    project_img_id,
    friend_id ,
    setProjectShow , 
    setProjectTitle ,
    setContent ,
    setGithubUrl,
    setDate,
    setMainImage,
    projects,
    setProjects
}) {

    

    const [deleteConfirm , setDeleteConfirm] = useState(false)

    const handleUpdate = () => {
        setProjectShow(true)
        setProjectTitle(project_title)
        setContent(project_content)
        setGithubUrl(project_github_url)
        setDate(project_date)
        setMainImage(project_main_img)
    }

    const handleDelete =() => {
        setDeleteConfirm(true)
    }
    const deleteById = (id) => {
        const afterDeleting = projects.filter((project) => {
            return project.project_id !== id;
        })
        setProjects(afterDeleting);
    }

    const handleDeleteConfirm = async () => {
        try {
            
            const response = await fetch(`http://localhost:8888/mysite/my-site-project-delete.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: project_id }),
            });

            const result = await response.json();
            if (result.success) {
                // Silme işlemi başarılı
                setDeleteConfirm(false);
                // Burada gerekirse bir state güncellemesi yapabilirsiniz.
            } else {
                console.error(result.error);
            }
            deleteById(project_id)
        } catch (error) {
            console.error("Silme işlemi sırasında hata:", error);
        }
    };

    return (
        <>
            <div className="main-post-card">
                <div className="main-post-card-content">
                    <div className="post-card-img">
                        <img src={project_main_img} alt="" />
                    </div>
                    <div className="post-card-text">
                        <h2 dangerouslySetInnerHTML={{ __html: project_title }} />
                        <div className="content-date">
                            <h5>{project_date}</h5>
                        </div>
                    </div>

                    <div className="post-card-setting">
                        <button onClick={handleUpdate} className='post-card-update-btn'>
                            Update
                        </button>

                        <button onClick={handleDelete} className='post-card-delete-btn'>
                            Delete
                        </button>
                        {
                            deleteConfirm ? <DeleteModal setDeleteConfirm = {setDeleteConfirm} project_title = {project_title} project_id={project_id} handleDeleteConfirm={handleDeleteConfirm} /> : ""
                        }

                        <button className='post-card-task-btn'>
                            To Task
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
