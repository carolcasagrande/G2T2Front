import React from 'react';

import HeaderLinks from '../Header-links';

import logo from '../../img/logo.png';
import voltar from '../../img/voltar.png';
import edit from '../../img/pencil.png';
import trash from '../../img/trash.png';

import './styles.css'

const PatientsWaiting: React.FC = () => (

<div className='patients-table'>
      <div className='thead'>
        <div className='tr'>
          <div className="row row-table-header">
            <div className="col-7">
              <div className='th'>Nome</div>
            </div>
            <div className="col-5">
              <div className='th'>Tempo de espera</div>
            </div>
          </div>
          </div>
      </div>
      <div className='tbody'>

            <div className="row row-table">
              <div className="col-7">
                <div className='td'>Fernando Gomes</div>
              </div>
              <div className="col-5 time-info">
                <div className='td'>15 min</div>
                <div className="icons">
                  <span aria-label="Delete">
                    <img className='icon' src={ edit } alt="editar" />
                  </span>
                  <span aria-label="Edit">
                    <img className='icon' src={ trash } alt="deletar" />
                  </span>
                </div>
              </div>
            </div>

      </div>
    </div>

);

export default PatientsWaiting;

