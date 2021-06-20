import React, { useEffect, useState } from 'react';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
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

  //teste
  const [dateCallsEdit, setDateCallsEdit] = useState('');
  const [hourEdit, setHourEdit] = useState('');
  const [statusEdit, setStatusEdit] = useState('');

/*   function handleEditRow(n){
    alert(n)
  }

 */
  useEffect(()=> {
    api.get('services').then(response => {
      setSchedules(response.data)
      console.log(schedules)
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
          <>
          <div className="row-table" key={schedule.cpf} style={{display: 'flex'}}>
            <p className="col-3" >{schedule.client?.name}</p>
            <p className="col-2">{moment.utc(schedule.date_service).format('DD-MM-YY')}</p> 
            <p className="col-2">{moment.utc(schedule.time_service).format('HH:mm')}</p>
            <p className="col-2">{schedule.status_service.toLowerCase()}</p>
            <p className="col-2">{moment.utc(schedule.date_schedule).format('DD-MM-YY')}</p>
            <div className="icons" onClick={() => alert(schedule.id)}>
              <span aria-label="Edit">
                <EditIcon className='icon' style={{ width: '20px' }} />
              </span>
            </div>
          </div>

          <div className="row-table" key={schedule.cpf} style={{display: 'flex'}}>
           <p className="col-3" >{schedule.client?.name}</p>
           <input type="date" id="dateEdit" placeholder="Data:" value={schedule.date_service} onChange={(e) => setDateCallsEdit(e.target.value) } required />
           <input type="time" id="timeEdit" placeholder="Hora:" value={moment.utc(schedule.time_service).format('HH:mm')} onChange={(e) => setHourEdit(e.target.value)} required />
           
           <div className="value-status">
              <select name="status" id="status" value={schedule.status_service.toUpperCase()} onChange={(e) => setStatusEdit(e.target.value)} required>
                  <option value="status">Status</option>
                  <option value="AGENDADO">Agendado</option>
                  <option value="REALIZADO">Realizado</option>
                  <option value="CANCELADO">Cancelado</option>
                  <option value="AGUARDANDO_ATENDIMENTO">Aguardando Atendimento</option>
              </select>
            </div>

           <p className="col-2">{moment.utc(schedule.date_schedule).format('DD-MM-YY')}</p>
           <div className="icons">
             <span aria-label="Save">
               <SaveIcon className='icon' style={{ width: '20px' }} />
             </span>
           </div>
         </div>
         </>
        ))
      }
    </div>
  )

};

export default ReceptionistBody;

