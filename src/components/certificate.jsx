import React from 'react';
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


const Certifications = () => {
  return (
    <div className="cwen">
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}> Design Thinking & Innovation</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={dt} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>Email tactics</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={emailing} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>Mastering Microsoft 365</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={ms365} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>Website Hacking / Penetration Testing</h2>
      <div class="ca">
  <img class="card-img-top" id='certImage' src={penTest} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>Master confident presentation</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={presentation} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>SOC & Incident Response Attendance certificate</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={rapid7} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>Soft Skills</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={soft_skills} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>System Administration (Windows server 2022)</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={sysAdmin} alt="Card cap" />
</div>
      </div>
      <div className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>mastering teamwork</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={teamwork} alt="Card cap" />
</div>
      </div>
      <div style={{marginBottom:'1.5%'}} className="certColumn">
        <h2 className='CertTitle' style={{marginBottom:'2%'}}>Smart Solutions</h2>
      <div class="ca">
  <img id='certImage' class="card-img-top" src={iot} alt="Card cap" />
</div>
      </div>
    </div>
  );
};

export default Certifications;