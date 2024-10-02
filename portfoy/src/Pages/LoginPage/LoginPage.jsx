import React, { useState } from "react";
import "./LoginPage.css"; // CSS dosyasını unutma
import axios from "axios";
import { Outlet } from "react-router";

const Login = ({ admin , setAdmin , adminID , setAdminID}) => {
  const [adminMail, setAdminMail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");




  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8888/mysite/my-site-admin.php", {
        admin_mail: adminMail,
        admin_password: adminPassword,
      });
    
      console.log("Response data:", response.data); // Yanıtı kontrol et
  
      if (response.data.status === "success") {
        setMessage(`Giriş başarılı! Hoşgeldiniz, ${response.data.admin_name}`);
        setAdmin(response.data.admin_name)
        setAdminID(response.data.admin_id)
      } else {
        
        setMessage(response.data.message);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    }

  };
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="title">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={adminMail}
              onChange={(e) => setAdminMail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {
          message === "Geçersiz e-posta veya şifre" ? <p style={{color:"red" , textAlign:"center",marginTop:"20px"}}>{message}</p> : ""
        }
      </div>
      <Outlet />
      </div>
  );
};

export default Login;
