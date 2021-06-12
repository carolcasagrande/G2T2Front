import React from 'react';

import './styles.css'

const HeaderLinks: React.FC = () => (
  <ul className='head-links'>

    <li>
      <a href={`/login`}>
        login
      </a>
    </li>

    <li>
      <a href={`/patient`}>
        patient
      </a>
    </li>

    <li>
      <a href={`/specialist`}>
        specialist
      </a>
    </li>

    <li>
      <a href={`/occupation`}>
        occupation
      </a>
    </li>

    <li>
      <a href={`/calls`}>
        calendar
      </a>
    </li>

    <li>
      <a href={`/record`}>
        prontuario
      </a>
    </li>

    <li>
      <a href={`/history`}>
        historico
      </a>
    </li>
  </ul>
);

export default HeaderLinks