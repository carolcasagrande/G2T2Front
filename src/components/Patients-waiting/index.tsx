import React from 'react';

import edit from '../../img/pencil.png';
import trash from '../../img/trash.png';

import PatientsBody from '../Patients-body';
import PatientsHead from '../Patients-head';

import HomeHeader from '../Home-header';


import './styles.css'

interface Props {
  checkins: any;
  title: string;
}

const PatientsWaiting: React.FC<Props> = ({ checkins, title }) => {
  
  return(

    <div className='patients-table'>
      <HomeHeader title={title} />
      <div className='tbody'>
        <PatientsHead />
        {
          checkins.map( (checkin: any) => {
            return <PatientsBody key={checkin._id} checkin={ checkin } />
          })
        }
      </div>
    </div>

  )

};

export default PatientsWaiting;

