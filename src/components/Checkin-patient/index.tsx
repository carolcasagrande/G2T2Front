import React from 'react';

import './styles.css';

import moment from 'moment';
import 'moment/locale/pt-br';


interface Props {
  record: any;
}

const CheckinPatient: React.FC<Props> = ({ record }) => (

  <div className="row row-table-medical-record">
    <div className="col-7">
      <div className='td-medical-record'>{ record.medical_record.client.name }</div>
    </div>
    <div className="col-5 time-info-medical-record">
      <div className='td-medical-record'>
        { `${moment(record.history_date).format('L')} 
           ${moment(record.history_hour).format('LT')}` 
        }
      </div>
    </div>
  </div>

);

export default CheckinPatient;

// ${Date.parse(record.history_hour)}