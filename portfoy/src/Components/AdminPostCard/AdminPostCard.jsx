import React, { useState } from 'react'
import "./AdminPostCard.css"
import DeleteModal from '../DeleteModal/DeleteModal';
export default function AdminPostCard({ 
    post_id,
    post_title , 
    post_content , 
    post_img , 
    post_categori_id , 
    post_created_at , 
    post_created_by , 
    post_short_content,
    setShowModal ,
    setBlogTitle , 
    setContent ,
    setAuthor ,
    setMainImage,
    setShortContent,
    setImage,
    posts,
    setPosts
}) {

    const [deleteConfirm , setDeleteConfirm] = useState(false)

    function stripHtmlTags(str) {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return doc.body.textContent || "";
    }

    const cleanShortContent = stripHtmlTags(post_short_content);

    const handleUpdate = () => {
        setShowModal(true)
        setBlogTitle(post_title)
        setContent(post_content)
        setAuthor(post_created_by)
        setMainImage(post_img)
        setShortContent(post_short_content)
    }

    const handleDelete =() => {
        setDeleteConfirm(true)
    }
    const deleteById = (id) => {
        const afterDeleting = posts.filter((post) => {
            return post.id !== id;
        })
        setPosts(afterDeleting);
    }

    const handleDeleteConfirm = async () => {
        try {
            
            const response = await fetch(`http://localhost:8888/mysite/my-site-blog-delete.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: post_id }),
            });

            const result = await response.json();
            if (result.success) {
                // Silme işlemi başarılı
                setDeleteConfirm(false);
                // Burada gerekirse bir state güncellemesi yapabilirsiniz.
            } else {
                console.error(result.error);
            }
            deleteById(post_id)
        } catch (error) {
            console.error("Silme işlemi sırasında hata:", error);
        }
    };

    return (
        <>
            <div className="main-post-card">
                <div className="main-post-card-content">
                    <div className="post-card-img">
                        <img src={post_img} alt="" />
                    </div>
                    <div className="post-card-text">
                        <div dangerouslySetInnerHTML={{ __html: post_created_by }} />
                        <h2 dangerouslySetInnerHTML={{ __html: post_title }} />
                        <div className="content-date">
                            <p >{cleanShortContent.length > 150 ? cleanShortContent.substring(0, 150) + "..." :  cleanShortContent}</p>
                            <h5>{post_created_at}</h5>
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
                            deleteConfirm ? <DeleteModal setDeleteConfirm = {setDeleteConfirm} post_title = {post_title} post_id={post_id} handleDeleteConfirm = {handleDeleteConfirm} /> : ""
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
