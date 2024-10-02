import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { FaEnvelope } from 'react-icons/fa'
import axios from 'axios';
import AdminMessageCard from '../../Components/AdminMessageCard/AdminMessageCard';


export default function Chat() {

    const [messages , setMessages] = useState([]);
    const [notReadedMessages, setNotReadedMessages] = useState([])


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8888/mysite/my-site-get_messages.php');
                setMessages(response.data); // Yazıları state'e kaydet
                const updatedReadMessage = messages.filter(message => message.is_read == 0);
                setNotReadedMessages(updatedReadMessage);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts(); // Yazıları getir
        

    }, [messages]);

    return (
        <>
            <div className="main-chat">
                <div className="main-chat-content">
                    <div className="blog-manager-content-header">
                        <h1>Messages Container</h1>
                        <FaEnvelope />
                    </div>
                    <div className="chat-new-message">
                        <h1>Okunmayan Messajlar : </h1>
                        <div className="new-message-cards">
                            {
                                notReadedMessages.length > 0 ? notReadedMessages.map((message) => {
                                    return <AdminMessageCard
                                            key={message.message_id}
                                            message_id={message.message_id}
                                            message_name={message.message_name}
                                            message_email={message.message_mail}
                                            message_content={message.message_discription}
                                            message_is_read={message.is_read}
                                            message_is_deleted={message.is_deleted}
                                        />
                                }) : <h2>okunmayan Message Yok</h2>
                            }
                        </div>
                    </div>
                    <div className="chat-new-message">
                        <h1>Tüm Messajlar : </h1>
                        <div className="new-message-cards">
                            {
                                messages.map((message) => {
                                        return <AdminMessageCard
                                                key={message.message_id}
                                                message_id={message.message_id}
                                                message_name={message.message_name}
                                                message_email={message.message_mail}
                                                message_content={message.message_discription}
                                                message_is_read={message.is_read}
                                                message_is_deleted={message.is_deleted}
                                                messages={messages}
                                                setMessages={setMessages}
                                            />
                                })
                            }
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}
