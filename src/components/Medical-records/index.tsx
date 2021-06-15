import React from 'react';

import "./styles.css"

import moment from 'moment';
import 'moment/locale/pt-br';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const MedicalRecord: React.FC = () =>{
  return (
        
    <div className="medical-records-container">

      <div className="medical-records-date-time">
        <div className='date-time-medical-records' >
          {moment().format('LL')}
          <CalendarTodayIcon className="medical-records-material-icon" style={{ fontSize: 30, padding: 5 }} />
        </div>
        <div className='date-time-medical-records' >
          {moment().format('LT')}
          <QueryBuilderIcon className="medical-records-material-icon" style={{ fontSize: 30, padding: 5 }} />
        </div>
      </div>
      <div className="description-medical-records"> Oi, eu sou um prontuário escrito em um passado não muito distante por você mesmo. Obrigado por lembrar de mim. Tava com saudades</div>

    </div>         
              
  );
}

export default MedicalRecord;
