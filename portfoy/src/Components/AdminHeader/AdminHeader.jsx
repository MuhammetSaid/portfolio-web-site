import React, { useEffect, useState } from 'react'

import "./AdminHeader.css"
import { FaAngleDown, FaEnvelope, FaSearch } from 'react-icons/fa'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router';

export default function AdminHeader({adminInfo}) {

    const [loadingImage, setLoadingImage] = useState(true); // Resim yükleme durumu
    const [firstName, setFirstName] = useState("");

    const navigate = useNavigate();

    const handleClick = () => {
        // Burada "/details" rotasına yönlendirme yapılır, post.id ile dinamik URL de oluşturabilirsiniz.
        navigate("/" );
    };

    const handleClickMessage = () => {
        // Burada "/details" rotasına yönlendirme yapılır, post.id ile dinamik URL de oluşturabilirsiniz.
        navigate("chat" );
    };

    const handleImageLoad = () => {
        setLoadingImage(false); // Resim yüklendiğinde loading durumunu kapat
    };

    useEffect(() => {
        if (adminInfo) {
            const firstName1 = adminInfo.admin_name.split(" ")[0];
            setFirstName(firstName1);
        }
    }, [adminInfo]); // adminInfo değiştiğinde çağır
    return (
        <>
            <div className="admin-header">
                    <div className="admin-header-content">
                        <div className="admin-header-logo" onClick={handleClick}>
                            <img src={require("../../Assets/logo.png")} alt="" />
                            <img src={require("../../Assets/logoAd.png")} alt="" />
                        </div>
                        <div className="admin-header-header">
                            <div className="admin-header-search">
                                <form action="">
                                    <input type="text" />
                                    <button type='submit'><FaSearch /></button>
                                </form>
                            </div>
                            <div className="admin-header-setting">
                                {
                                    adminInfo ? (
                                        <div className="admin-header-profile">
                                            <button type="button" className="messages-btn" onClick={handleClickMessage}>
                                                <FaEnvelope className='message-btn-i'/>
                                                <span className="messages-btn-span">
                                                    99+
                                                </span>
                                            </button>
                                            <div className="admin-header-profile-img">
                                                {loadingImage && <Loading />} {/* Yükleme durumu */}
                                                <img 
                                                    src={adminInfo.admin_img} 
                                                    alt="" 
                                                    onLoad={handleImageLoad} 
                                                    style={{ display: loadingImage ? 'none' : 'block' }} // Resim yüklendikten sonra göster
                                                />
                                            </div>
                                            <h4>{firstName} <FaAngleDown /></h4>
                                        </div>
                                    ) : <Loading />
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
