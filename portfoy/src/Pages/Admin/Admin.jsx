import React, { useEffect, useState } from 'react';
import "./Admin.css";
import { FaAngleDown, FaEnvelope, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { NavLink, Outlet } from 'react-router-dom';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';

export default function Admin({ admin, setAdmin, adminID, setAdminID , totalVisits }) {
    const [adminInfo, setAdminInfo] = useState(null);

    useEffect(() => {
        const fetchAdminInfo = async () => {
            if (adminID) {
                try {
                    const response = await axios.post('http://localhost:8888/mysite/my-site-get_admin.php', {
                        id: adminID,
                    });
                    setAdminInfo(response.data); // Gelen bilgileri saklayın
                } catch (error) {
                    console.error('Error fetching admin info:', error);
                }
            }
        };

        fetchAdminInfo();
    }, [adminID]); // adminID değiştiğinde çağır

    const handleClick = () => {
        setAdmin('pasif');
    };

    return (
        <div className="main-admin">
            <div className="main-admin-content">
                <AdminHeader adminInfo={adminInfo}/>

                <div className="admin-sections">
                    <AdminNavbar setAdmin={setAdmin} setAdminID={setAdminID} totalVisits = {totalVisits} />
                    <Outlet />        
                </div>
            </div>
            
        </div>
    );
}
