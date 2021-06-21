import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment';
import 'moment/locale/pt-br';

import './styles.css';

import {setActive} from '../../redux/active/active.actions.js'

interface Props {
  service: any;
}

const WaitingListPatient: React.FC<Props> = ({ service }) => {
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

      <div className='td-medical-record col-7'>
        {service.client.name.slice(0, 22)}
        {service.client.name > 21 ? '...' : ""}
      </div>
      <div className="waiting-list-time-info col-5">
        <div className='waiting-list-td'> {moment.utc(service.date_schedule).format('HH:mm')} </div>
      </div>
      
    </div>
  )

};

export default WaitingListPatient;

// ${Date.parse(record.history_hour)}