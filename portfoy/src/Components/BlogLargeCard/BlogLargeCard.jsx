import React, { useEffect } from 'react'
import "./BlogLargeCard.css"
import { useNavigate } from 'react-router';

export default function BlogLargeCard({ mainPost }) {

    const createSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/<\/?[^>]+(>|$)/g, "") // HTML etiketlerini kaldırır
          .replace(/\s+/g, "-")           // Boşlukları tire ile değiştirir
          .replace(/[^\w-]+/g, "");       // Özel karakterleri kaldırır
      };


    const navigate = useNavigate();

    const handleClick = () => {
        // Burada "/details" rotasına yönlendirme yapılır, post.id ile dinamik URL de oluşturabilirsiniz.
        navigate("/blog/" + createSlug(mainPost.title));
    };
    const date = new Date(mainPost.created_at);

    const month = date.toLocaleString('default', { month: 'long' }); // Ayın tam ismi (örn: "September")
    const year = date.getFullYear();


    return (
        <>
            <div className="blog-large-card">
                <div className="blog-large-card-content" onClick={handleClick}  style={{backgroundImage:`url(${mainPost.image})` , backgroundSize: "cover"  }}>
                    <div className="blog-card-text">
                        <h2 dangerouslySetInnerHTML={{ __html: mainPost.title }} />
                        

                        <div className="large-card-content">
                            <p>{mainPost.created_by}</p>
                            <p>{year} {month}</p>
                        </div>
                    </div>


                </div>


                <div className="blog-large-card-arka"></div>
            </div>
        </>
    )
}
