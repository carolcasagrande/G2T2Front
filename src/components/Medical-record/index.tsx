import React from 'react';

import "./styles.css"

import moment from 'moment';
import 'moment/locale/pt-br';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

interface Props {
  activeMedicalRecord: any;
}

const MedicalRecord: React.FC<Props> = ({ activeMedicalRecord }) =>(
  <div>
    <div className="medical-records-date-time">
      <div className='date-time-medical-records' >
        {moment(activeMedicalRecord.history_date).format('LL')}
        <CalendarTodayIcon className="medical-records-material-icon" style={{ fontSize: 30, padding: 5 }} />
      </div>
      <div className='date-time-medical-records' >
        {moment(activeMedicalRecord.history_time).format('LT')}
        <QueryBuilderIcon className="medical-records-material-icon" style={{ fontSize: 30, padding: 5 }} />
      </div>
    </div>
    <div className="description-medical-records">
      { activeMedicalRecord.description }
    </div>
    <hr />
  </div>
);

export default MedicalRecord;
