import React from 'react';
import { useDispatch } from 'react-redux'

import "./styles.css"

import moment from 'moment';
import 'moment/locale/pt-br';

import { setCheckinActive } from '../../redux/checkin/checkin.actions.js';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const MedicalRecordForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCheckinActive(null));
    console.log("BOTÃO APERTADOOOOOO")
  }
  
  return (
               
    <div className="form-medical-record-container">
      <form onSubmit={handleLogin} className="form-medical-record">
      
        <div className="date-time">
          <div className='date-time-medical-record' >
            {moment().format('LL')}
            <CalendarTodayIcon className="medical-record-material-icon" style={{ fontSize: 30, padding: 5 }} />
          </div>
          <div className='date-time-medical-record' >
            {moment().format('LT')}
            <QueryBuilderIcon className="medical-record-material-icon" style={{ fontSize: 30, padding: 5 }} />
          </div>
        </div>
        <textarea name="description" className="description" placeholder="Escreva o prontuário de atendimento..."></textarea>      
        <button className="btn-medical-record" type="submit">Registrar </button>

      </form>
    </div>
              
  );
}

export default MedicalRecordForm;
