import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Admin from './Pages/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import Statistics from './Pages/Statistics/Statistics';
import MainDashboard from './Pages/MainDashboard/MainDashboard';
import ProjectManager from './Pages/ProjectManager/ProjectManager';
import BlogsManager from './Pages/BlogsManager/BlogsManager';
import CoursesManager from './Pages/CoursesManager/CoursesManager';
import Chat from './Pages/Chat/Chat';
import BlogDetail from './Pages/BlogDetail/BlogDetail';



function App() {
  const [education, setEducation] = useState([]) 
  const [skills, setSkills] = useState([]) 
  const [certificates, setCertificates] = useState([]) 
  const [experiences, setExperiences] = useState([]) 

  const location = useLocation();

  const [admin, setAdmin] = useState(localStorage.getItem('admin') || 'pasif');
  const [adminID, setAdminID] = useState(localStorage.getItem('admin_id') || 'a');

  useEffect(() => {
    localStorage.setItem('admin_id' , adminID);
  },[adminID])

  useEffect(() => {
    localStorage.setItem('admin' , admin);
  },[admin])

  useEffect(() => {
    axios.get('http://localhost:8888/mysite/my-site-get_education.php')
      .then(response => {
        setEducation(response.data.reverse());
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8888/mysite/my-site-get_skills.php')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);
  
  useEffect(() => {
    axios.get('http://localhost:8888/mysite/my-site-get_certificates.php')
      .then(response => {
        setCertificates(response.data);
        console.log(certificates)
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8888/mysite/my-site-get_experience.php')
      .then(response => {
        setExperiences(response.data.reverse());
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const [totalVisits, setTotalVisits] = useState(0);
  useEffect(() => {
      const fetchVisits = async () => {
          try {
              const response = await axios.get('http://localhost:8888/mysite/my-site-visit.php');
              setTotalVisits(response.data.total_visits);
          } catch (error) {
              console.error('Error fetching visit data:', error);
          }
      };

      // Ziyaret sayısını almak için çağır
      fetchVisits();
  }, []);
  const [posts, setPosts] = useState([]);

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
    }, [posts]);

  return (
    <div className="App">
      {(location.pathname !== "/admin" && location.pathname !== "/admin/statistics" && location.pathname !== "/admin/dashboard" && location.pathname !== "/admin/project_manager" && location.pathname !== "/admin/blog_manager" && location.pathname !== "/admin/course_manager" && location.pathname !== "/admin/chat") && <Navbar />}
      <Routes>
        <Route path='/' element = {<Home 
                                    education = {education} 
                                    skills = {skills}
                                    certificates = {certificates}
                                    experiences = {experiences}
                                    totalVisits = {totalVisits}
                                    posts = {posts}
                                  />}>
                                    
                                  </Route>
        <Route path='/about_me' element = {<AboutMe/>}></Route>
        <Route path='/projects' element = {<Projects/>}></Route>
        <Route path='/blogs' element = {<Blogs/>}></Route>
        <Route path='/blog/:slug' element= {<BlogDetail posts={posts}/>} />
        <Route path='/courses' element = {<Courses/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/admin' element = {
          admin === 'pasif' ?
          (<LoginPage
              admin = {admin} 
              setAdmin = {setAdmin} 
              adminID = {adminID}
              setAdminID = {setAdminID}
          />) : 
          (<Admin 
            admin={admin} 
            setAdmin={setAdmin}
            adminID = {adminID}
            setAdminID = {setAdminID}
            totalVisits = {totalVisits}
          />)
          }
        >
          <Route path='' element = {admin === 'pasif' ? "" : <Statistics totalVisits = {totalVisits} />}/>
          <Route path='dashboard' element = {admin === 'pasif' ? "" : <MainDashboard education={education} setEducation = {setEducation} skills={skills} setSkills={setSkills} certificates={certificates} setCertificates={setCertificates} experiences={experiences} setExperiences={setExperiences} />}/>
          <Route path='project_manager' element = {admin === 'pasif' ? "" : <ProjectManager />}/>
          <Route path='blog_manager' element = {admin === 'pasif' ? "" : <BlogsManager />}/>
          <Route path='course_manager' element = {admin === 'pasif' ? "" : <CoursesManager />}/>
          <Route path='chat' element = {admin === 'pasif' ? "" : <Chat />}/>
        </Route>
        <Route path='*' element = {<NotFound/>}></Route>
      </Routes>
      {(location.pathname !== "/admin" && location.pathname !== "/admin/statistics" && location.pathname !== "/admin/dashboard" && location.pathname !== "/admin/project_manager" && location.pathname !== "/admin/blog_manager" && location.pathname !== "/admin/course_manager" && location.pathname !== "/admin/chat") && <Footer />}

      
    </div>
  );
}

export default App;


/*Light Mode:

Zemin: Açık Gri (#F5F5F5)
Metin: Koyu Mavi (#2C3E50)
Vurgu Renk: Turuncu (#E67E22)
İkincil Vurgu: Açık Turuncu (#F39C12)
Dark Mode:

Zemin: Koyu Mavi (#34495E)
Metin: Açık Gri (#ECF0F1)
Vurgu Renk: Turuncu (#E67E22)
İkincil Vurgu: Açık Turuncu (#F39C12)

*/