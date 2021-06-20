import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../service/api'

import { toast } from 'react-toastify';

import "./styles.css"

import moment from 'moment';
import 'moment/locale/pt-br';

import HomeHeader from '../Home-header';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const MedicalRecordForm: React.FC = () => {
  const dispatch = useDispatch();
  const activeCheckinToMedicalRecordShow = useSelector((state: any) => state.checkin.activeCheckin)
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataMedicalRecordHistory = {
      history_date: moment().format('LL'),
      history_time: moment().format('LT'),
      description: description,
      specialist_id: 1,
      medical_record_id: 1,
    }

    try {
      const response = await api.post('medical-records-history', dataMedicalRecordHistory);
          
      if(response.status === 201) toast.success("Prontuário salvo com sucesso")

    } catch (error) {

      const errors = error.response.data?.erro

      errors.map((erro: string) => toast.error(erro));
      
    }
    
  }

  return (
    <>
      <HomeHeader title='Novo prontuário' /> 
      {activeCheckinToMedicalRecordShow ?    
      <div className="form-medical-record-container">
        <form onSubmit={handleSubmit} className="form-medical-record">

          <div className="patient-name">
          {activeCheckinToMedicalRecordShow.patient}
          </div>
        
          <div className="date-time">
            <div className='date-time-medical-record' >
              {moment().format('LL')}
              <CalendarTodayIcon className="medical-record-material-icon" style={{ fontSize: 30, padding: 5 }} />
            </div>
            <div className='date-time-medical-record' >
              {/* moment(activeCheckinToMedicalRecordShow?.appointment.split(" ")[1]).format('LT')} */}
              {moment().format('LT')}
              <QueryBuilderIcon className="medical-record-material-icon" style={{ fontSize: 30, padding: 5 }} />
            </div>
          </div>
          <textarea 
            name="description" 
            className="description" 
            placeholder="Escreva o prontuário de atendimento..."
            onChange={(e) => console.log(e.target.value)}
          ></textarea>      
          <button className="btn-medical-record" type="submit">Registrar </button>

        </form>
      </div>
      : <div className='medical-record-not-selected'><h3>Escolha um paciente na fila de espera para criar um prontuário</h3></div>
      }
    </>
              
  );
}

export default MedicalRecordForm;
