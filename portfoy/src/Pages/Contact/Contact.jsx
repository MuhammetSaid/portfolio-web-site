import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';
import axios from 'axios';
import { SiLeetcode } from 'react-icons/si';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Axios ile POST isteği gönderiyoruz
    axios.post('http://localhost:8888/mysite/my-site-add_message.php', formData)
      .then(response => {
        setResponseMessage(response.data.message); // PHP'den dönen mesajı set ediyoruz
        setFormData({ name: '', email: '', message: '' }); // Formu temizlemek için state'leri boşaltıyoruz
      })
      .catch(error => {
        console.error('There was an error!', error);
        setResponseMessage('Mesaj gönderilirken bir hata oluştu.');
      });
  };
  useEffect(() => {
    window.scroll(0,0) 
 },[])
  return (
    <div className="main-contact">
      <div className="main-contact-content">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>Feel free to reach out, let's collaborate and build something great!</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a>+90 537 060 66 07</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a>muhammetsaidelsalih@gmail.com</a>
            </div>
          </div>


          <div className="social-media">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://leetcode.com/u/Muhammet_said/" target="_blank" rel="noreferrer">
              <SiLeetcode className="social-icon" />
            </a>
          </div>

        </div>
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form  onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
                rows="5" 
                required 
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;