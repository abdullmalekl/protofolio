
import React from "react";
import CertificateCard from "./certificateCards";
import dt from '../components/images/DT.jpg';
import emailing from '../components/images/emailing.jpg';
import ms365 from './images/ms365.jpg';
import penTest from './images/penTest.jpg';
import presentation from './images/Presentation.png';
import rapid7 from './images/rapid7.png';
import soft_skills from './images/soft_skills.jpg';
import sysAdmin from './images/sysAdmin.jpg';
import teamwork from './images/teamwork.jpg';
import iot from './images/IOT.jpg';
const certificates = [
  {
    title: 'Design Thinking & Innovation',
    image: dt,
    url: 'https://www.ideou.com/blogs/inspiration/what-is-design-thinking'
  },
  {
    title: "Email tactics",
    image: emailing,
    url: 'https://mailchimp.com/resources/email-marketing-strategy/'
  },
  {
    title: "Microsoft 365 Master",
    image: ms365,
    url: 'https://www.microsoft.com/en-us/microsoft-365'
  },
  {
    title: 'Website Hacking / Penetration Testing',
    image: penTest,
    url: 'https://owasp.org/www-project-top-ten/' 
  },
  {
    title: "Master confident presentation",
    image: presentation,
    url: 'https://www.duarte.com/presentation-skills/'
  },
  {
    title: "SOC & Incident Response Attendance certificate",
    image: rapid7,
    url: 'https://www.rapid7.com/services/security-operations-center/'
  },
  {
    title: 'Soft Skills',
    image: soft_skills,
    url: 'https://www.skillsyouneed.com/general/soft-skills.html'
  },
  {
    title: "System Administration (Windows server 2022)",
    image: sysAdmin,
    url: 'https://learn.microsoft.com/en-us/windows-server/'
  },
  {
    title: "Mastering teamwork",
    image: teamwork,
    url: 'https://asana.com/resources/teamwork-skills'
  },
  {
    title: "Smart Solutions",
    image: iot,
    url: 'https://www.oracle.com/internet-of-things/what-is-iot/'
  }
];


const CertificatesGrid = () => {
    return (
        <div  className="min-h-screen bg-gray-100 p-4">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-[440px] scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
           {certificates.map((cert, index) => (
  <CertificateCard key={index} title={cert.title} image={cert.image} url={cert.url} />
))}

          </div>
        </div>
      );
};

export default CertificatesGrid;