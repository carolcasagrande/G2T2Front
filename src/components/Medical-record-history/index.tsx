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
      `row-table-medical-record
      ${activeMedicalRecord?.id === record.id ? "active" : ""} `
    }
    onClick={() => dispatch(setMedicalRecordActive(record))}
  >
    <div className='td-medical-record'>{record.medical_record.client.name}</div>
  </div>
  )

};

export default MedicalRecordHistory;

// ${Date.parse(record.history_hour)}