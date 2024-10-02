import React, { useEffect, useState } from 'react'
import "./BlogsManager.css"
import ReactQuill from 'react-quill'; // Quill import
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { FaPlusCircle, FaRegEye, FaSearch } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import AdminPostCard from '../../Components/AdminPostCard/AdminPostCard';
import Loading from '../../Components/Loading/Loading';
import { IoCloseSharp } from "react-icons/io5";


const Modal = ({ 
    show, 
    handleClose , 
    modules , 
    blogTitle , 
    setBlogTitle ,
    handleImageChange , 
    content , 
    setContent , 
    handleSubmit,
    author, 
    setAuthor,
    mainImage,
    setMainImage,
    shortContent , 
    setShortContent
}) => {
    
    if (!show) {
        return null;
    }
    
    return (
        <>

            <div className="main-create-blog modal-overlay">
                <div className="main-create-blog-content modal-content modal-xl">
                    <div className="create-blog-header">
                        <h1>Add Blog</h1>
                        <IoCloseSharp onClick={handleClose}  className='close-i'/>
                    </div>
                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Title : </label>
                        <ReactQuill 
                            className='blog-manager-create'
                            value={blogTitle} 
                            onChange={setBlogTitle} 
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
                        <label  className='label' htmlFor="">Short Content : </label>
                        <ReactQuill 
                            className='blog-manager-create'
                            value={shortContent} 
                            onChange={setShortContent} 
                            modules={modules} 
                        />
                    </div>

                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Author : </label>
                        <input type="text" value={author} onChange={(event)=>setAuthor(event.target.value)}/>
                    </div>
                    <div className='blog-manager-create-div'>
                        <label  className='label' htmlFor="">Main Image : </label>
                        <input type="text" value={mainImage} onChange={(event)=>setMainImage(event.target.value)}/>
                    </div>

                    <button onClick={handleSubmit}>submit</button>
                </div>
            </div>

    </>
);
}; 
export default function BlogsManager() {
    const [blogTitle, setBlogTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [mainImage, setMainImage] = useState('');
    const [shortContent, setShortContent] = useState('');
    const [image, setImage] = useState(null); // Ana fotoğraf için state

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        setBlogTitle('')
        setContent('')
        setAuthor('')
        setMainImage('')
        setShortContent('')
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Seçilen dosyayı state'e ekle
    };
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8888/mysite/my-site-get_posts.php');
                setPosts(response.data); // Yazıları state'e kaydet
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts(); // Yazıları getir
    }, [posts]);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', blogTitle);
        formData.append('content', content);
        formData.append('author', author);
        formData.append('mainImage', mainImage);
        formData.append('shortContent', shortContent);
        if (image) {
            formData.append('image', image); // Ana fotoğrafı formData'ya ekle
        }

        try {
            const response = await axios.post('http://localhost:8888/mysite/my-site-create.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data); // Başarı durumunu kontrol et
            setShowModal(false)
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

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

    
    const activePostsCount = posts.filter(post => post.is_deleted == 0).length;
    return (
        <>
            <div className="main-blog-manager">
                <div className="main-blog-manager-content">

                    {
                        // Blog Manager H1 title and Search block 
                    }
                    <div className="blog-manager-content-header">
                        <h1>Blogs Manager</h1>
                        <div className="search">
                            <form action="">
                                <input type="text" placeholder='Search in Blogs...'/>
                                <button><FaSearch /></button>
                            </form>
                        </div>
                    </div>

                    {
                        // Blog Manager H1 title and Buttons  
                    }

                    <div className="blog-manager-content-posts-btns">

                        <h2><span style={{color:"rgb(230, 126, 34)", padding:"10px 16px" , backgroundColor:"rgba(230, 125, 34, 0.349)", borderRadius:"8px"}}>{activePostsCount}</span> Total Blog</h2>
                        <div className="posts-btns">
                            <button>
                                <FaPlusCircle className='posts-btn-i'/>
                                Add Category
                            </button>

                            <button>
                                <FaRegEye className='posts-btn-i' /> 
                                Get To Blog Views
                            </button>

                            <button onClick={toggleModal}>
                                <FaPlusCircle className='posts-btn-i' />
                                Create a Blog
                            </button>
                            <Modal 
                                show={showModal} 
                                handleClose={toggleModal} 
                                modules = {modules} 
                                blogTitle = {blogTitle} 
                                setBlogTitle = {setBlogTitle} 
                                handleImageChange = {handleImageChange} 
                                content={content} 
                                setContent={setContent} 
                                handleSubmit={handleSubmit} 
                                author={author}
                                setAuthor={setAuthor}
                                mainImage={mainImage}
                                setMainImage={setMainImage}
                                shortContent={shortContent}
                                setShortContent={setShortContent}
                            />

                            <button>
                                <FaPlusCircle className='posts-btn-i' />
                                Upload a Blog
                            </button>
                        </div>

                    </div>

                    <div className="blog-manager-content-blogs-list">
                        {
                            posts != null && posts.length > 0 ? posts.map((post) => {
                                if (post.is_deleted == 0) {
                                    return <AdminPostCard 
                                        key = {post.id}
                                        post_id = {post.id}
                                        post_title = {post.title}
                                        post_content = {post.content}
                                        post_img = {post.image}
                                        post_categori_id = {post.categori_id}
                                        post_created_at = {post.created_at}
                                        post_created_by={post.created_by}
                                        post_short_content={post.short_content}
                                        setShowModal = {setShowModal}
                                        setBlogTitle={setBlogTitle}
                                        setContent={setContent}
                                        setAuthor={setAuthor}
                                        setMainImage={setMainImage}
                                        setShortContent={setShortContent}
                                        setImage={setImage}
                                        posts = {posts}
                                        setPosts = {setPosts}
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

