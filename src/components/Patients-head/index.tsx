import React from 'react';

import './styles.css'

const PatientsHead: React.FC = () => (

  <div className='thead'>
    <div className="row-table-header">
      <div className='tr row'>
        <div className="col-7">
          <div className='th'>Nome</div>
        </div>
        <div className="col-5">
          <div className='th'>Consulta</div>
        </div>
      </div>
    </div>
  </div>
);

export default PatientsHead;

