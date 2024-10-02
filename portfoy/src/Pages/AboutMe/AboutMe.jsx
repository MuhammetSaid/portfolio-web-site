import React, { useEffect } from 'react'

import "./AboutMe.css"
import Navbar from '../../Components/Navbar/Navbar'
import { FaFacebookF, FaGithub, FaHackerrank, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function AboutMe() {
    useEffect(() => {
        window.scroll(0,0) 
     },[])
    return (
        <>
        
        <div className='main-aboutme'>
            <div className="main-aboutme-content">
                <div className="aboutme-top">
                    <h1>Learn More About Me</h1>
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                </div>
                <div className="aboutme-text">
                    <div className="aboutme-text-text">
                        <div className="aboutme-text-text-content">
                            <h2>About Me</h2>
                            <p><span className='first-word'>Merhaba,</span> ben Muhammed Said Elsalih. Malatya'da yaşıyorum ve  <span className="color-p">Malatya Turgut Özal Üniversitesi'nde bilgisayar mühendisliği</span> bölümünde 3. sınıf öğrencisiyim. Bilgisayar mühendisliğine olan ilgim, programlamaya olan merakım ve teknolojiye olan tutkum, kariyer yolculuğumun temel taşlarını oluşturuyor. Bu yolculuğa <span className="color-p">C++ dilinde</span> programlamaya başlamamla adım attım ve bu süreçte kendimi çeşitli alanlarda geliştirdim.

C++ ile programlamaya girişim, <span className="color-p">algoritmalar</span> ve <span className="color-p">veri yapıları </span>gibi temel konularda sağlam bir temel oluşturmama yardımcı oldu. Bu dilde çeşitli sorunları çözerek,<span className="color-p">analitik düşünme</span> ve <span className="color-p">problem çözme</span> becerilerimi geliştirdim. C++'ın sunduğu güçlü araçlar sayesinde, karmaşık problemleri daha iyi anlama ve çözme yeteneği kazandım. Bu deneyim, programlamaya olan ilgimi daha da artırdı ve farklı diller ve teknolojiler öğrenmeye karar verdim.
<br/>
<br/>
<span className='first-word color-p'>Web geliştirme</span> konusuna geçiş yaparak,<span className='color-p'>HTML, CSS </span> ve <span className='color-p'>JavaScript</span> ile tanıştım. Bu teknolojiler, web sayfalarını oluşturmak ve görsel olarak çekici hale getirmek için gerekli olan temel araçlardır. HTML ve CSS'in sunduğu imkanlarla, kullanıcı dostu ve estetik açıdan hoş <span className='color-p'>web sayfaları</span>  tasarladım. JavaScript ise, dinamik ve etkileşimli web sayfaları oluşturmak için önemli bir araç olarak bana yardımcı oldu. Bu süreçte,<span className='color-p'>kullanıcı deneyimini iyileştirmeye yönelik çeşitli teknikler ve en iyi uygulamalar hakkında bilgi edindim.</span> 

Web geliştirmede kendimi daha da <span className='color-p'>ileriye</span> taşımak amacıyla <span className='color-p'>React Framework'ını</span> öğrendim. 
<br /><br />
<span className='first-word color-p'>React</span>, modern web uygulamaları geliştirmede büyük kolaylık sağlayan ve performans odaklı bir kütüphanedir. React ile, dinamik ve yeniden kullanılabilir bileşenler oluşturarak, büyük ölçekli projelerde daha etkili ve verimli bir şekilde çalışabilirim. Ayrıca, <span className='color-p'>CSS tarafında</span> da <span className='color-p'>Tailwind</span> ve <span className='color-p'>Bootstrap</span> gibi framework'larla çalışarak, tasarım ve stil konularında yetkinlik kazandım. Bu framework'lar, web sayfalarının hızlı ve estetik bir şekilde geliştirilmesine olanak tanıdı.

<span className='color-p'>Backend</span> tarafında ise <span className='color-p'>PHP</span> ve <span className='color-p'>Flask</span> kullanarak çeşitli projeler geliştirdim. PHP ile sunucu tarafı programlama yaparak, <span className='color-p'>dinamik web siteleri ve uygulamalar oluşturabildim</span>. Flask ise, Python dilinde hafif ve esnek bir web framework'ü olarak projelerimde etkili bir şekilde kullanmamı sağladı. <span className='color-p'>Veri tabanları konusunda ise, MySQL</span> ve <span className='color-p'>SQLite</span> ile çalışarak, veri yönetimi ve veri tabanı tasarımı konularında önemli bir bilgi birikimi elde ettim. Bu bilgi birikimi, <span className='color-p'>verilerin doğru bir şekilde depolanması</span> ve <span className='color-p'yönetilmesi></span> konusunda büyük bir avantaj sağladı.

<br />
<br />
<span className='first-word color-p'>Gömüllü Sistemler tarafında ise Arduino</span> ile projeler geliştirme sürecim, <span className='color-p'>donanım</span> ve <span className='color-p'>yazılım</span> bilgimi birleştirmemi sağladı. Özellikle <span className='color-p'>vending machine (otomat)</span> projesi üzerinde çalışarak, hem donanım hem de yazılım konularında önemli deneyimler kazandım. Bu proje, <span className='color-p'>elektronik bileşenlerle</span> etkileşimde bulunma ve <span className='color-p'>gerçek dünya problemlerini çözme yeteneğimi</span> artırdı.

<br />
<br />

<span className='first-word'>Son dönemde</span>, <span className='color-p'>yapay zeka (AI)</span> alanında da kendimi geliştirmeye başladım. Yapay zeka, gelecekteki teknolojik gelişmelerin merkezinde yer alıyor ve bu alandaki bilgi ve becerilerimi artırmak için çeşitli kaynaklardan öğrenmeye devam ediyorum. <span className='color-p'>Yapay zeka</span> ve <span className='color-p'>makine öğrenmesi</span> konularında temel bilgileri öğrenerek, bu alanda daha ileri düzeyde projeler geliştirme hedefindeyim.
<br /><br />
<span className='first-word'>Geçmişte</span>, <span className='color-p'>Baş Türk Cam'da</span> bir ay süren <span className='color-p'>staj deneyimim</span>, profesyonel çalışma ortamında gerçek dünya projelerinde yer almama ve çeşitli teknolojileri uygulama fırsatı sundu. Bu staj sürecinde, hem <span className='color-p'>teknik bilgi</span> hem de <span className='color-p'>iş dünyasında gerekli olan beceriler</span> konusunda önemli bir deneyim kazandım. Staj sürecinde edindiğim bilgiler ve deneyimler, kariyerimdeki ilerlememe katkı sağladı.
<br /><br />
<span className='first-word color-p'>Gelecekte</span>, hem <span className='color-p'>programlama</span> ve <span className='color-p'>web geliştirme</span> alanlarında hem de <span className='color-p'>yapay zeka</span> konusunda çalışmalarımı sürdürmek istiyorum. Teknoloji dünyasında sürekli olarak değişen ve gelişen yeniliklere ayak uydurmak, kendimi bu alanlarda daha da geliştirmek ve etkili projeler üretmek amacıyla çalışmalarımı devam ettiriyorum. Bu hedeflerime ulaşmak için sürekli olarak öğrenmeye, yeni teknolojiler keşfetmeye ve deneyim kazanmaya devam edeceğim.</p>
                        </div>
                    </div>
                    <div className="aboutme-right">
                        <div className="aboutme-image">
                            <div className="aboutme-image-img">
                                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFPh-D_D35c_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715317274121?e=1731542400&v=beta&t=MLt6E3IceqiNlA2x4UoOP3mOudGvk3-_Hycr21-Evm8" alt="" />
                            </div>
                        </div>
                        <div className="aboutme-social">
                            <ul>
                                <li>
                                    <a href=""><FaInstagram  className='i'/></a>
                                </li>
                                <li>
                                    <a href=""><FaLinkedinIn  className='i'/></a>
                                </li>
                                <li>
                                    <a href=""><FaGithub  className='i'/></a>
                                </li>
                                <li>
                                    <a href=""><FaFacebookF  className='i'/></a>
                                </li>
                                <li>
                                    <a href=""><FaHackerrank className='i' /></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
