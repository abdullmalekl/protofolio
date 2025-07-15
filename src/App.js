
import './App.css';
import prof from './profile.jfif';
import techCover from './tech-cover.jpg';
import vm from './vm.png';
import lv from './laravel.jpg';
import rex from './rex.jpg';
import ccna from './ccna.png';
import ms from './365.png';
import ds from './components/images/Data security.png'
import ColumnList from './components/Badgeslist';
import Footer from './components/footer';
import figma from './components/images/figma.png';
import Certifications from './components/certificate';
import AnimatedBackground from './components/AnimatedBackground';
import { useEffect, useState } from 'react';
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Who am I?";

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);
  
  const items = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      date: 'frontend',
      title: 'ReactJs'
    },
    {
      icon: figma,
      date: 'UI/UX design',
      title: 'Figma'
    },
    {
      icon: rex,
      date: 'APIs management',
      title: 'Redux Toolkit'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
      date: 'Database management', 
      title: 'MySQL'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1053/1053210.png',
      date: 'Smart solutions',
      title: 'IOT'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/11528/11528162.png',
      date: 'RealTime communication',
      title: 'Websocket'
    },
    {
      icon: lv,
      date: 'Server-Side', 
      title: 'Laravel framework'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103625.png',
      date: 'Machine Learning',
      title: 'Artificial Intelligence'
    },
    {
      icon: ms,
      date: 'microsoft package',
      title: 'Microsoft365'
    },
    {
      icon: vm,
      date: 'Datacenter virtualization', 
      title: 'Vmware vSphere'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3063/3063394.png',
      date: 'Website Hacking',
      title: 'Pentration Testing'
    },
    
    {
      icon: ds,
      date: 'Clean backups & Restore',
      title: 'Data Security'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png',
      date: 'System Administration',
      title: 'Linux'
    },
    {
      icon: ccna,
      date: 'Network management', 
      title: 'CCNA Cisco'
    }
  ]
  return (
    <>
    <AnimatedBackground />
    <div className="tech-background">
      <div className="particles"></div>
      <div className="tech-grid"></div>
      <img src={techCover} className="tech-cover" alt="Technology Background" />
    </div>
    <div className="App">
      <header className="App-header">
        <div className={`profile-container ${isVisible ? 'animate-in' : ''}`}>
          <img src={prof} className="App-logo" alt="profile" />
          <div className="profile-glow"></div>
        </div>
        <p className={`username ${isVisible ? 'fade-in' : ''}`}>
          Abdulmalik khurwat
        </p>
        <p className="typed-text">
          {typedText}<span className="cursor">|</span>
        </p>
        <p className={`bio-text ${isVisible ? 'slide-up' : ''}`}>
        I'm a Solutions Architect and a Software Engineer, specializing in web development and application design. My passion is creating smart solutions that integrate programming, digital infrastructure, and user experience in an efficient and cohesive manner. I have practical experience in both frontend development and managing infrastructure, including Linux, VMware, and Datacenter management. I continuously work on developing web applications using the latest tools and technologies.

I hold a Bachelor's degree in Internet Technologies from the University of Gharyan, where I graduated with a GPA of 81.

I am committed to providing practical solutions that help businesses in their digital transformation journey, whether by designing new systems or improving existing infrastructures. Additionally, I have expertise in Internet of Things (IoT) technologies and a solid understanding of cybersecurity to ensure safe and robust systems. I believe that continuous learning is key to success in the tech world, and I strive to expand my skills and horizons to make a meaningful impact through my work.
        </p>
      </header>
      <div className="popular-section">
  <h2 id='skills' className="section-title">Skills</h2>
  <div className="grid-container">
    {items.map((item, index) => (
      <div key={index} className="card">
        <img src={item.icon} alt="icon" className="icon" />
        <div className="card-text">
          <p className="date">{item.date}</p>
          <p className="title">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>
<div className="min-h-screen bg-gray-100">
      <h1 id='cert' className="text-2xl font-bold text-center py-8" >Certifications</h1>
      <Certifications />
    </div>
    <div className='bg-gray-100'>
    <div id='cert'>
      <h2 className="section-title">Badges</h2>
    </div>
    < ColumnList />
    </div>
    <div className='bg-gray-100'>
      <h2 id='cert' className="section-title">projects</h2>
      <section id="projects" className="my-12 px-4 md:px-12">
  <h1 className="video-title">E-Tech</h1>
  <h2 className="video-description">
  E-Tech is a technical educational platform focused on the Internet of Things (IoT).
   It offers training content and practical projects,<br/>
    along with an integrated cloud environment for3real-time device connectivity and control via WebSocket
  </h2>
  <div className="flex justify-center">
    <div className="w-full max-w-3xl">
      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto rounded-xl shadow-lg"
      >
        <source src={`${process.env.PUBLIC_URL}/videos/myproject.mp4`} type="video/mp4" />
        <p>Your browser does not support HTML5 video. Here is a <a href="/videos/myproject.mp4">link to the video</a> instead.</p>
      </video>
    </div>
  </div>
</section>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
