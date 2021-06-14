import React from 'react';

import edit from '../../img/pencil.png';
import trash from '../../img/trash.png';

import PatientsBody from '../Patients-body';
import PatientsHead from '../Patients-head';

import './styles.css'

interface Props {
  checkins: any;
}

const PatientsWaiting: React.FC<Props> = ({ checkins }) => {
  
  return(

  <div className='patients-table'>
    <div className='tbody'>
      <PatientsHead />
      {
        checkins.map( (checkin: any) => {
          return <PatientsBody key={checkin.appointment} checkin={ checkin } />
        })
      }
    </div>
  </div>
  )

};

export default PatientsWaiting;

