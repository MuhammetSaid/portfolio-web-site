import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import BlogSmallCard from '../../Components/BlogSmallCard/BlogSmallCard';
import BlogLargeCard from '../../Components/BlogLargeCard/BlogLargeCard';

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    
    // Sayfa başında scroll ayarlaması
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    // Verileri sadece bir kez getirmek için useEffect ayarı 
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
    }, []); // Burada boş bir bağımlılık dizisi kullanarak sadece bileşen ilk yüklendiğinde çağırıyoruz

    // Filtrelenmiş post verilerini hazırlama (post_is_main ve is_deleted'e göre)
    const mainPosts = posts.filter(post => post.post_is_main == 1 && post.is_deleted == 0);
    const secondaryPosts = posts.filter(post => post.post_is_main == 2 && post.is_deleted == 0);
    const otherPosts = posts.filter(post => post.post_is_main == 0 && post.is_deleted == 0);

    return (
        <div className='main-blog'>
            <div className="main-blog-content">
                <div className="first-cards">
                    {/* Büyük Blog Kartları */}
                    {mainPosts.map((post) => (
                        <BlogLargeCard key={post.id} mainPost={post} />
                    ))}

                    {/* Küçük Blog Kartları */}
                    <div className="first-cards-small">
                        {secondaryPosts.map((post) => (
                            <BlogSmallCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                
                {/* Diğer Blog Kartları */}
                <div className="last-cards">
                    {otherPosts.map((post) => (
                        <BlogSmallCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
