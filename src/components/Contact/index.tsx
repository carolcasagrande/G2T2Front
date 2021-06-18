import React from 'react';

import './styles.css'

import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

interface IContact{
  personName: string,
  githubUsername: string,
  linkedinUrlCompleted?: string
}

const Contact = ({ personName, githubUsername, linkedinUrlCompleted  }:IContact) => (
  
      <div className="contact">
        <a target="_blank" href={`https://github.com/${githubUsername}`}>
          <img src={github} alt="logo github" />
        </a>
        {linkedinUrlCompleted ?
          <a target="_blank" href={`https://www.linkedin.com/in/${linkedinUrlCompleted}`}>
            <img src={linkedin} alt="logo linkedin" />
          </a>              
        : null}
        <p className='person-name'>{personName}</p>
      </div>
);

export default Contact;