import React from 'react';
import cs from './Badges/cs.png';
import csp from './Badges/csp.png';
import kdb from './Badges/kdb.png';
import pc from './Badges/pc.png';
import saas from './Badges/saas.png';
import { CCard, CCardBody, CCardImage, CCardText } from '@coreui/react'


const ColumnList = () => {
  return (
    <div className="cwen">
      <div className="column">
        <h2 className='cardTitle' style={{marginBottom:'2%'}}> Data Recovery</h2>
      <div class="card">
  <img class="card-img-top" src={cs} alt="Card cap" />
</div>
      </div>
      <div className="column">
        <h2 className='cardTitle' style={{marginBottom:'2%'}}>Cloud Service Provider</h2>
      <div class="card">
  <img class="card-img-top" src={csp} alt="Card cap" />
</div>
      </div>
      <div className="column">
        <h2 className='cardTitle' style={{marginBottom:'2%'}}> Data Protection</h2>
      <div class="card">
  <img class="card-img-top" src={kdb} alt="Card cap" />
</div>
      </div>
      <div className="column">
        <h2 className='cardTitle' style={{marginBottom:'2%'}}>Public cloud</h2>
      <div class="card">
  <img class="card-img-top" src={pc} alt="Card cap" />
</div>
      </div>
      <div className="column">
        <h2 className='cardTitle' style={{marginBottom:'2%'}}>Saas Protection</h2>
      <div class="card">
  <img class="card-img-top" src={saas} alt="Card cap" />
</div>
      </div>
    </div>
  );
};

export default ColumnList;