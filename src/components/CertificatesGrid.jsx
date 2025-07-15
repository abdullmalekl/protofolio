
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
    title:'Design Thinking & Innovation',
    image: dt,
  },
  {
    title: "Email tactics",
    image: emailing,
  },
  {
    title: "Microsoft 365 Master",
    image: ms365,
  },
  {
    title:'Website Hacking / Penetration Testing',
    image: penTest,
  },
  {
    title: "Master confident presentation",
    image: presentation,
  },
  {
    title: "SOC & Incident Response Attendance certificate",
    image: rapid7,
  },
  {
    title:'Soft Skills',
    image: soft_skills,
  },
  {
    title: "System Administration (Windows server 2022)",
    image: sysAdmin,
  },
  {
    title: "mastering teamwork",
    image: teamwork,
  },
  {
    title: "Smart Solutions",
    image: iot,
  },
];

const CertificatesGrid = () => {
    return (
        <div  className="min-h-screen bg-gray-100 p-4">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-[440px] scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {certificates.map((cert, index) => (
              <CertificateCard key={index} title={cert.title} image={cert.image} />
            ))}
          </div>
        </div>
      );
};

export default CertificatesGrid;