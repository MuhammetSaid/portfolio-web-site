import React from 'react'

import "./HomeCard.css"
import { FaFacebookF, FaGithub, FaHackerrank, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
export default function HomeCard() {

    const pdfFilePath = "/Muhammet-Said-Elsalih-cv.pdf";

    return (
        <div className='main-home-card'>
            <div className="main-home-card-content">
                <div className="main-home-card-img">
                    <div className="card-img-content">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFPh-D_D35c_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715317274121?e=1731542400&v=beta&t=MLt6E3IceqiNlA2x4UoOP3mOudGvk3-_Hycr21-Evm8" alt="" />
                    </div>
                </div>
                <div className="card-content-text">
                    <h1>Muhammed Said Elsalih</h1>
                    <p >Merhaba, Ben Muhammet Said Elsalih, Malatya Turgut Özal Üniversitesi'nde <span className='color-p'>bilgisayar mühendisliği</span> 3. sınıf öğrencisiyim. Programlama yolculuğuma <span className="color-p">C++</span> ile başladım ve algoritmalar, veri yapıları konusunda güçlü bir temel edindim. Web geliştirmede <span className="color-p">HTML, CSS, JavaScript</span> ve <span className="color-p">React</span> kullanarak dinamik ve kullanıcı dostu projeler geliştirdim. Backend'de <span className="color-p">PHP ve Flask </span> ile sunucu tarafı programlama yaparken, <span className="color-p">MySQL ve SQLite</span>  ile veri tabanı yönetiminde deneyim kazandım. Gömüllü sistemler de ise <span className="color-p">Arduino</span>  aracılığı ile  vending machine projesi geliştirerek hem donanım hem de yazılım entegrasyonu sağladım. <span className="color-p">Yapay zeka ve makine öğrenmesi</span> alanlarına ilgi duyuyor ve bu konularda kendimi geliştirmeye devam ediyorum. Baş Türk Cam'da yaptığım staj, profesyonel hayatta teknik becerilerimi uygulamamı sağladı ve kariyer yolculuğuma katkıda bulundu.</p>
                    <div className="social">
                        <a href={pdfFilePath} download="Muhammet-Said-Elsalih-cv.pdf">
                            <button className='cv'>Download Cv</button>
                        </a>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/muhamet_said_elsalih/#" target='_blank'><FaInstagram  className='i'/></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/muhamet-said-alsalih-a76b65284/" target='_blank'><FaLinkedinIn  className='i'/></a>
                            </li>
                            <li>
                                <a href="https://github.com/MuhammetSaid" target='_blank'><FaGithub  className='i'/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/me/" target='_blank'><FaFacebookF  className='i'/></a>
                            </li>
                            <li>
                                <a href="https://leetcode.com/u/Muhammet_said/" target='_blank'><SiLeetcode className='i' /></a>
                            </li>
                            <li>
                                <a href="" target='_blank'><FaHackerrank className='i' /></a>
                            </li>

                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
