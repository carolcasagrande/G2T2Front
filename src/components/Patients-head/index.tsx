import React from 'react';

import './styles.css'

const PatientsHead: React.FC = () => (

  <div className='thead'>
    <div className='tr'>
      <div className="row row-table-header">
        <div className="col-7">
          <div className='th'>Nome</div>
        </div>
        <div className="col-5">
          <div className='th'>Tempo de espera</div>
        </div>
      </div>
    </div>
  </div>
);

export default PatientsHead;

