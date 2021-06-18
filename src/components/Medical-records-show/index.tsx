import React from 'react';

import { useSelector } from 'react-redux'

import "./styles.css"

import HomeHeader from '../Home-header';

import moment from 'moment';
import 'moment/locale/pt-br';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const MedicalRecordShow: React.FC = () =>{
  const activeMedicalRecord = useSelector((state: any) => state.medicalRecord.activeMedicalRecord)
  console.log(activeMedicalRecord)
  return (
    <>
      <HomeHeader title='prontuário' />
      {activeMedicalRecord ?
      <div className="medical-records-container">

        <div className="medical-records-date-time">
          <div className='date-time-medical-records' >
            {moment(activeMedicalRecord?.history_date).format('LL')}
            <CalendarTodayIcon className="medical-records-material-icon" style={{ fontSize: 30, padding: 5 }} />
          </div>
          <div className='date-time-medical-records' >
            {moment(activeMedicalRecord?.history_time).format('LT')}
            <QueryBuilderIcon className="medical-records-material-icon" style={{ fontSize: 30, padding: 5 }} />
          </div>
        </div>
        <div className="description-medical-records">
          { activeMedicalRecord?.description }
        </div>

      </div>
      : <div className='medical-record-history-not-selected'><h3>"Escolha um prontuário no histórico de prontuários"</h3></div>
      }
    </>  
              
  );
}

export default MedicalRecordShow;
