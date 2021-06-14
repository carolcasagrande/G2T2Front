import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css'

interface Props {
  checkin: any;
}

const PatientsBody: React.FC<Props> = ({ checkin }) => (

  <div className="row row-table">
    <div className="col-7">
      <div className='td'>{ checkin.patient }</div>
    </div>
    <div className="col-5 time-info">
      <div className='td'> 15 min</div>
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

);

export default PatientsBody;

