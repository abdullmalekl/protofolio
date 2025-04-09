
import './App.css';
import prof from './profile.jfif';
import wall from './wallpaper.jpg';
import vm from './vm.png';
import lv from './laravel.jpg';
import rex from './rex.jpg';
import ccna from './ccna.png';
import ms from './365.png';
import CertificatesGrid from "./components/CertificatesGrid";
import Footer from './components/footer';
function App() {
  const items = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      date: 'frontend',
      title: 'ReactJs'
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
    <div className="background">
    <img src={wall} className="wall" alt="wall" />
    </div>
    <div className="App">
      <header className="App-header">
        <img src={prof} className="App-logo" alt="logo" />
        <p  className='username'>
          Abdulmalik khurwat
        </p>
        <p  className="text-6xl md:text-8xl font-outfit font-light animate-fadeIn mb-6" id='description'>
        Who am I?
      </p>
      <p className="text-lg md:text-xl font-outfit max-w-2xl text-center animate-fadeIn delay-500" style={{ animationDelay: "2s", animationFillMode: "forwards" }} id='details'>
      I’m a Solutions Architect and a Software Engineer, specializing in web development and application design. My passion is creating smart solutions that integrate programming, digital infrastructure, and user experience in an efficient and cohesive manner. I have practical experience in both frontend development and managing infrastructure, including Linux, VMware, and Datacenter management. I continuously work on developing web applications using the latest tools and technologies.

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
      <CertificatesGrid />
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
