import React, { useEffect, useState } from 'react';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../service/api';

import './styles.css'

interface IClient {
  address_id: number;
  cpf: string;
  email: string;
  id: number;
  mobile: string;
  name: string;
  phone: string;
  type_blood: string;
}
interface ISpecialist {
  address_id: number;
  email: string;
  id: number;
  mobile: string;
  name: string;
  phone: string;
  profession_id: number;
  register: string;
}
interface ISchedule {
  client: IClient;
  address_id: number;
  cpf: string;
  email: string;
  id: number;
  mobile: string;
  name: string;
  phone: string;
  type_blood: string;
  date_schedule: string;
  date_service: string;
  specialist: ISpecialist;
  status_service: string;
  time_service: string;
} 

const ReceptionistBody: React.FC = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>([])

  useEffect(()=> {
    api.get('services').then(response => {
      setSchedules(response.data)
    })
  }, [])

  return(
    <div>
      <div className="row-title" style={{display: 'flex'}}>
        <p className="col-3">Paciente</p>
        <p className="col-2">Atendimento</p>
        <p className="col-2">Horário</p>
        <p className="col-2">Status</p>
        <p className="col-2">Agendamento</p>
      </div>
      {
        schedules.map(schedule => (
          <div className="row-table" key={schedule.cpf} style={{display: 'flex'}}>
            <p className="col-3" >{schedule.client?.name}</p>
            <p className="col-2">{moment.utc(schedule.time_service).format('HH:mm')}</p>
            <p className="col-2">{moment.utc(schedule.date_service).format('DD-MM-YY')}</p>
            <p className="col-2">{schedule.status_service.toLowerCase()}</p>
            <p className="col-2">{moment.utc(schedule.date_schedule).format('DD-MM-YY')}</p>
            <div className="icons">
              <span aria-label="Edit">
                <EditIcon className='icon' style={{ width: '20px' }} />
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )

};

export default ReceptionistBody;

