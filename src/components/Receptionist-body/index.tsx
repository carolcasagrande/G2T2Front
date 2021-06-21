import React, { useEffect, useState, FormEvent} from 'react';
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
  price: number;
  type_blood: string;
  date_schedule: string;
  date_service: string;
  specialist: ISpecialist;
  status_service: string;
  time_service: string;
} 
interface ICalls {
  date_schedule: string;
  date_service: string;
	time_service: string;
  price: string;
  status_service: string;
  client_id: string;
  specialist_id: string;
}

const ReceptionistBody: React.FC = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>([])

  //teste
  
  const [hourEdit, setHourEdit] = useState('');
  const [statusEdit, setStatusEdit] = useState('');
  const [scheduleEdit, setScheduleEdit ] = useState<any>({});
  const [dateCallsEdit, setDateCallsEdit] = useState('');
  const [updateSchedule, setUpdateSchedule] = useState('');
  
    function handleEditRow(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault()

     let dataCallsEdit = {
      date_schedule: scheduleEdit.date_schedule,
      date_service: dateCallsEdit?dateCallsEdit:scheduleEdit.date_service,
      time_service: hourEdit?`${dateCallsEdit} ${hourEdit}`:scheduleEdit.time_service,
      price: scheduleEdit.price,
      status_service: statusEdit?statusEdit:scheduleEdit.status_service,
      client_id:scheduleEdit.client_id ,
      specialist_id: scheduleEdit.specialist_id,
    }
     
    api.put(`services/${scheduleEdit.id}`, dataCallsEdit).then(response => {
      setUpdateSchedule(response.data)
    })
    
  }

 

  useEffect(()=> {
    api.get('services').then(response => {
      setSchedules(response.data)
    })
  }, [updateSchedule])

 
  return(
    
    <div>
      <div className="row-title" style={{display: 'flex'}}>
        <p className="col-3">Paciente</p>
        <p className="col-3">Especialista</p>
        <p className="col-2">Atendimento</p>
        <p className="col-1">Horário</p>
        <p className="col-1">Status</p>
        <p className="col-2">Agendamento</p>
      </div>
      {
        
        schedules.map(schedule => (
        <>      
        
          <div onClick={() => setScheduleEdit(schedule)} className="row-table" key={schedule.cpf} style={{display: 'flex'}}>
            <p className="col-3" >{schedule.client?.name}</p>
            <p className="col-3" >{schedule.specialist?.name}</p>
            <p className="col-2">{moment.utc(schedule.date_service).format('DD-MM-YY')}</p> 
            <p className="col-1">{moment.utc(schedule.time_service).format('HH:mm')}</p>
            <p className="col-1">{schedule.status_service.toLowerCase()}</p>
            <p className="col-2">{moment.utc(schedule.date_schedule).format('DD-MM-YY')}</p>
            <div className="icons">
              <span aria-label="Edit">
                <EditIcon className='icon' style={{ width: '20px' }} />
              </span>
            </div>
          </div>

          <form onSubmit={handleEditRow}  >
          
            <div className="row-table" key={schedule.id} style={{display: 'flex'}}>
              <p className="col-3" >{schedule.client?.name}</p>
              <input type="date" id="dateEdit" placeholder="Data:" value={!dateCallsEdit?moment.utc(schedule.date_service).format('YYYY-MM-DD'):dateCallsEdit} onChange={(e) => setDateCallsEdit(e.target.value) /* required */}/>
              <input type="time" id="timeEdit" placeholder="Hora:" value={!hourEdit?moment.utc(schedule.time_service).format('HH:mm'):hourEdit} onChange={(e) => setHourEdit(e.target.value)} /* required */ />
              
              <div className="value-status">
                  <select name="status" id="status" value={!statusEdit?schedule.status_service.toUpperCase():statusEdit} onChange={(e) => setStatusEdit(e.target.value)} required>
                      <option value="status">Status</option>
                      <option value="AGENDADO">Agendado</option>
                      <option value="REALIZADO">Realizado</option>
                      <option value="CANCELADO">Cancelado</option>
                      <option value="AGUARDANDO-ATENDIMENTO">Aguardando</option>
                  </select>
                </div>

              <p className="col-2">{moment.utc(schedule.date_schedule).format('DD-MM-YY')}</p>
              
              
             {/* /*  {/* Value Hidden */}{/* 
              <input type="hidden" id="idServiceCall" name="idServiceCall" value={schedule.id} />
              <input type="hidden" id="dateSchedule" name="dateSchedule" value={schedule.date_schedule} />
              <input type="hidden" id="price" name="price" value={schedule.price} />
              <input type="hidden" id="idClient" name="idClient" value={schedule.client.id} />
              <input type="hidden" id="idSpecialist" name="idSpecialist" value={schedule.specialist.id} /> */}

              <button  type="submit" className="btnSave">/
                <div className="icons">
                  <span aria-label="Save">
                    <SaveIcon className='icon' style={{ width: '20px' }} />
                  </span>
                </div>
              
              </button>
              
            </div>
          </form>
         </>
        ))
      }
    </div>
  )

};

export default ReceptionistBody;

