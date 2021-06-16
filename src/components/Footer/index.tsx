import React from 'react';

import './styles.css'

import Contact from '../Contact'

const Footer: React.FC = () => (
  <footer className="footer">
    <section className="redesocial">
      <Contact personName='Frontend - Turma G2T2 - Maisha' githubUsername='carolcasagrande/G2T2Front' />
      <p className='front-back-division'> | </p>
      <Contact personName='Backend - Turma G2T2 - Maisha' githubUsername='ofernandovegano/g2t2-backend'/>
    </section> 
    <p className='developed-by'>Curso Gama & Afya - Desenvolvido por G2T2</p>
  </footer>
);

export default Footer;