import React from 'react'
import "./BlogSmallCard.css"
import { useNavigate } from 'react-router';

export default function BlogSmallCard({ post }) {

    const createSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/<\/?[^>]+(>|$)/g, "") // HTML etiketlerini kaldırır
          .replace(/\s+/g, "-")           // Boşlukları tire ile değiştirir
          .replace(/[^\w-]+/g, "");       // Özel karakterleri kaldırır
    };

    const date = new Date(post.created_at); 

    const navigate = useNavigate();

    const handleClick = () => {
        // Burada "/details" rotasına yönlendirme yapılır, post.id ile dinamik URL de oluşturabilirsiniz.
        navigate("/blog/" + createSlug(post.title));
    };

    const month = date.toLocaleString('default', { month: 'long' }); // Ayın tam ismi (örn: "September")
    const year = date.getFullYear();


    return (
        <>
            <div className="blog-small-card" onClick={handleClick}>
                <div className="blog-small-card-content"  style={{backgroundImage:`url(${post.image})` , backgroundSize: "cover"  }}>
                    <div className="blog-card-text">
                    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />


<div className="small-card-content">
    <p>{post.created_by}</p>
    <p>{year} {month}</p>
</div>
                    </div>


                </div>


                <div className="blog-small-card-arka"></div>
            </div>
        </>
    )
}
