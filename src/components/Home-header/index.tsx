import React from 'react';
import './styles.css';

interface Props {
  title: string;
}

const HomeHeader: React.FC<Props> = ({ title }) =>(

  <div className="headers">
    <h2>{ title }</h2>
  </div>
);

export default HomeHeader;