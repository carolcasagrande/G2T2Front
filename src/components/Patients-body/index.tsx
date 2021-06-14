import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css'

const PatientsBody: React.FC = () => (

  <div className='tbody'>

    <div className="row row-table">
      <div className="col-7">
        <div className='td'>Fernando Gomes</div>
      </div>
      <div className="col-5 time-info">
        <div className='td'>15 min</div>
        <div className="icons">
          <span aria-label="Delete">
            <EditIcon className='icon' style={{ width: '20px'}}/>
          </span>
          <span aria-label="Edit">
            <DeleteIcon className='icon' style={{ width: '20px'}}/>
          </span>
        </div>
      </div>
    </div>

  </div>
);

export default PatientsBody;

