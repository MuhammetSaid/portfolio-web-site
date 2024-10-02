import React, { useState } from 'react'
import "./AdminMessageCard.css"
import DeleteModal from '../DeleteModal/DeleteModal'
export default function AdminMessageCard({message_id , message_name , message_email , message_content , message_is_read , message_is_deleted , messages , setMessages}) {
    const [deleteConfirm,setDeleteConfirm] = useState(false)


    const handleDelete =() => {
        setDeleteConfirm(true)
    }

    const hadnleReaded = async () => {
        try {
            
            const response = await fetch(`http://localhost:8888/mysite/my-site-message-read.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: message_id }),
            });

            const result = await response.json();
            if (result.success) {
                // Silme işlemi başarılı
                setDeleteConfirm(false);
                // Burada gerekirse bir state güncellemesi yapabilirsiniz.
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error("Silme işlemi sırasında hata:", error);
        }
    }
    const deleteById = (id) => {
        if (!Array.isArray(messages)) {
            console.error("Messages list is undefined or not an array");
            return;
        }

        const updatedMessages = messages.filter(message => message.message_id !== id);
        setMessages(updatedMessages);
    };
    const handleDeleteConfirm = async () => {
        try {
            
            const response = await fetch(`http://localhost:8888/mysite/my-site-message-delete.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: message_id }),
            });

            const result = await response.json();
            if (result.success) {
                // Silme işlemi başarılı
                setDeleteConfirm(false);
                // Burada gerekirse bir state güncellemesi yapabilirsiniz.
            } else {
                console.error(result.error);
            }
            deleteById(message_id)
        } catch (error) {
            console.error("Silme işlemi sırasında hata:", error);
        }
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        
        <>
            <div className="main-message-card">
                <div className="main-message-card-content">
                    <h2>Gönderen Kişi : <span>{message_name} </span></h2>
                    <h2>Gönderen Mail : <span>{message_email} </span></h2>
                    <h2>Message İçeriği :</h2>
                    <p className={isExpanded ? '' : 'text-clamp'}>{message_content}</p>
                    <button onClick={toggleReadMore} className='read-more'>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    
                </div>
                <button className='delete-btn' onClick={handleDelete}>Mesajı Sil</button>
                {
                    message_is_read == 0 ? <button onClick={hadnleReaded}>Okundu İşaret Et</button> : ""
                }
                {
                    deleteConfirm ? <DeleteModal setDeleteConfirm = {setDeleteConfirm} project_title = {message_name} project_id={message_id} handleDeleteConfirm={handleDeleteConfirm} /> : ""
                }
            </div>
        </>
    )
}
