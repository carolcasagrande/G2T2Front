import React from 'react';

import './styles.css'

import Contact from '../Contact'

const Footer: React.FC = () => (
  <footer className="footer">
    <section className="redesocial">
      <Contact personName='André' githubUsername='andreludwig' linkedinUrlCompleted='andr%C3%A9-ludwig-67b17414a'/>
      <Contact personName='Ariele' githubUsername='ArieleM' linkedinUrlCompleted='pereiramendonca'/>
      <Contact personName='Caroline' githubUsername='carolcasagrande' linkedinUrlCompleted='carolinecasagrande'/>
      <Contact personName='Fernando' githubUsername='ofernandovegano' linkedinUrlCompleted='fernandogomesrodrigues'/>
    </section> 
    <p className='developed-by'>Curso Gama & Afya - Desenvolvido por G2T2</p>
  </footer>
);

export default Footer;