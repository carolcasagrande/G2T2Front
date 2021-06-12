import React from 'react';

import './styles.css'

import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';

interface Props {
  personName: String;
  githubUsername: String;
  linkedinUrlCompleted: String;
}

const Contact: React.FC<Props> = ({ personName, githubUsername, linkedinUrlCompleted  }) => (
  
      <div className="contato">
        <a target="_blank" href={`https://github.com/${githubUsername}`}>
          <img src={github} alt="logo github" />
        </a>
        <a target="_blank" href={`https://www.linkedin.com/in/${linkedinUrlCompleted}`}>
          <img src={linkedin} alt="logo linkedin" />
        </a>              
        <p className='person-name'>{personName}</p>
      </div>
);

export default Contact;