import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import './styles.css';

import {setMedicalRecordActive} from '../../redux/medical-record/medical-record.actions.js'

import moment from 'moment';
import 'moment/locale/pt-br';


interface Props {
  record: any;
}

const MedicalRecordHistory: React.FC<Props> = ({ record }) => {
  const dispatch = useDispatch();
  const activeMedicalRecord = useSelector((state: any) => state.medicalRecord.activeMedicalRecord)
  const urlLocation = useLocation<Array<{}>>();
  
  return(
    <div
      className={
        `row
        row-table-medical-record
        ${activeMedicalRecord?.id === record.id ? "active" : ""}`
      }
      onClick={() => dispatch(setMedicalRecordActive(record))}
    >
      {urlLocation.pathname === '/specialist/appointment' ?
        (
        <>
          <div className='td-medical-record col-7'>
            {record.medical_record.client.name.slice(0, 22)}
            {record.medical_record.client.name > 21 ? '...' : ""}
          </div>
          <div className="time-info col-5">
            <div className='td'> 15 min</div>
          </div>
        </>
        )
      :
        (<div className='td-medical-record'>
          {record.medical_record.client.name}
        </div>)
      }
      
    </div>
  )

};

export default MedicalRecordHistory;

// ${Date.parse(record.history_hour)}