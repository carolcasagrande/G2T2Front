import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import './styles.css';

import {setActive} from '../../redux/active/active.actions.js'

interface Props {
  service: any;
}

const Client: React.FC<Props> = ({ service }) => {
  const dispatch = useDispatch();
  const activeservice = useSelector((state: any) => state.active.activePatientOrService)
  
  return(
    <div
      className={
        `row
        row-table-medical-record
        ${activeservice?.id === service.id ? "active" : ""}`
      }
      onClick={() => dispatch(setActive(service))}
    >

      <div className='td-medical-record'>
        {service.client.name}
      </div>
      
    </div>
  )

};

export default Client;
