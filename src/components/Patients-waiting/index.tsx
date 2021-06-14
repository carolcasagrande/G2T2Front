import React from 'react';

import edit from '../../img/pencil.png';
import trash from '../../img/trash.png';

import PatientsBody from '../Patients-body';
import PatientsHead from '../Patients-head';

import './styles.css'

const PatientsWaiting: React.FC = () => (

  <div className='patients-table'>
    <PatientsHead />
    <PatientsBody />
  </div>

);

export default PatientsWaiting;

