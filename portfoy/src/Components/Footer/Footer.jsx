import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
        <div className='footer-coontainer'>
            <div className="footer-content">
                <div className="footer-img-barkod">
                    <div className="footer-img-images">
                        <img src={require("../../Assets/logo.png")} alt="" />
                        <img src={require("../../Assets/logoAd.png")} alt="" />
                    </div>
                    <div className="footer-qr-nav">
                        <div className="footer-qr">
                            <img src={require("../../Assets/QrCode.png") } alt="" />
                        </div>
                        <div className="footer-nav">
                            <ul>
                                <li><Link to={"/"}> Ana Sayfa</Link></li>
                                <li><Link to={"/about_me"}> Hakkımda </Link></li>
                                <li><Link to={"/projects"}> Projeler</Link></li>
                                <li><Link to={"/blogs"}> Bloglar</Link></li>
                                <li><Link to={"/courses"}> Kurslar</Link></li>
                                <li><Link to={"/contact"}> İletişim</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-kategori">
                    <div className="footer-kategori-kategoriler">
                        <h3>Blogs</h3>
                        <div className="kategoriler-footer">
                            <div className="kateg-1">
                                <ul>
                                    <li><Link>All</Link> </li>
                                    <li><Link to={'#'}> Java ile Backend Patikaları</Link></li>
                                    <li><Link to={'#'}>PHP ile Backend Web Patikaları</Link></li>
                                    <li><Link to={'#'}>Frontend Web Patikaları</Link></li>
                                    <li><Link to={'#'}>.Net Core Patikaları</Link></li>
                                    <li><Link to={'#'}>Django ile Web Patikaları</Link></li>
                                </ul>
                            </div>
                            <div className="kateg-1">
                                <ul>
                                    <li><Link to={'#'}>Veri Bilimi Patikaları</Link></li>
                                    <li><Link to={'#'}>Node.js ile Backend Patikası</Link></li>
                                    <li><Link to={'#'}>Kotlin ile Mobile App Patikası</Link></li>
                                    <li><Link to={'#'}>Swift İle iOS Programlama Patikası</Link></li>
                                    <li><Link to={'#'}>React Native ile Mobile App Patikası</Link></li>
                                    <li><Link to={'#'}>Test Otomasyon Patikası</Link></li>
                                </ul>
                            </div>
                            <div className="kateg-1">
                                <ul>
                                    <li><Link to={'#'}>Veri Analizi Patikası</Link></li>
                                    <li><Link to={'#'}>Data Science for the Public Good Patikası</Link></li>
                                    <li><Link to={'#'}>Unity Learn Patikası</Link></li>
                                    <li><Link to={'#'}>Go Web Patikaları</Link></li>
                                    <li><Link to={'#'}>Hi-Kod Patikası</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-social">
                            <Link><FaLinkedin  className='footer-i'/></Link>
                            <Link><FaYoutube className='footer-i'/></Link>
                            <Link><FaInstagram className='footer-i'/></Link>
                            <Link><FaFacebook className='footer-i'/></Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="sirketler">
            <div className="sirketler-content">
                
            </div>
        </div>
        </>
    )
}
