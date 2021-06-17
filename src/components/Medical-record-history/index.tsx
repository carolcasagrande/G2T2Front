import React from 'react';
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

  return(
  <div
    className={
      `row row-table-medical-record
      ${activeMedicalRecord?.id === record.id ? "active" : ""} `
    }
    onClick={() => dispatch(setMedicalRecordActive(record))}
  >
    <div className="col-7">
      <div className='td-medical-record'>{record.medical_record.client.name}</div>
    </div>
    <div className="col-5 time-info-medical-record-history">
      <div className='td-medical-record'>
        {`${moment(record.history_date).format('L')} 
           ${moment(record.history_hour).format('LT')}`
        }
      </div>
    </div>
  </div>
  )

};

export default MedicalRecordHistory;

// ${Date.parse(record.history_hour)}