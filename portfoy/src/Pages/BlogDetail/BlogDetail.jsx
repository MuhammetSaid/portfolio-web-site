import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./BlogDetail.css"

const BlogDetail = ({posts}) => {
    const { slug } = useParams();  // URL'deki :slug parametresini al
    const [postDetail, setPostDetail] = useState(null);
    


    useEffect(() => {
        // posts içinde slug'ı arayıp bul
        const foundPost = posts.find(post => createSlug(post.title) === slug);
        if (foundPost) {
        setPostDetail(foundPost);
        }
    }, [slug, posts]);

    if (!postDetail) {
        return <div>Loading...</div>; // Post bulunamazsa ya da yükleniyorsa
    }

    return (
        <>
            <div className="main-blog-detail">
                <div className="main-blog-detail-content">
                    <h2 dangerouslySetInnerHTML={{ __html: postDetail.title }} />
                    <div dangerouslySetInnerHTML={{ __html: postDetail.content }} />

                </div>
            </div>
        </>
    );
};

// createSlug fonksiyonunu buraya da ekle
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/<\/?[^>]+(>|$)/g, "") // HTML etiketlerini kaldırır
    .replace(/\s+/g, "-")           // Boşlukları tire ile değiştirir
    .replace(/[^\w-]+/g, "");       // Özel karakterleri kaldırır
};

export default BlogDetail;
