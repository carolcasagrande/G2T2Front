import React, { useState, useEffect, FocusEvent } from 'react';
import calls from '../../../img/doctor5.jpg';
import moment from 'moment';
import 'moment/locale/pt-br';

import { FiArrowRight } from 'react-icons/fi';
import "./styles.css"
import api from '../../service/api'
import { toast } from 'react-toastify';

interface IProfession {
  id: string, 
  name: string, 
}
interface ISpecialists {
  id: string, 
  name: string, 
}

interface IPatient {
  id: string, 
  name: string, 
}

const CallsForm: React.FC = () => {
  const [patient, setPatient] = useState<IPatient>();
  const [cpf, setCpf] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [professions, setProfessions] = useState<IProfession[]>([]);
  const [specialists, setSpecialists] = useState<ISpecialists[]>([]);
  const [professionSelected, setProfessionSelected] = useState('');
  const [specialistsSelected, setSpecialistsSelected] = useState('');
  const [dateScheduling, setDateScheduling] = useState('');
  const [dateCalls, setDateCalls] = useState('');
  const [hour, setHour] = useState('');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');


  async function handleCalls(event: React.FormEvent<HTMLFormElement>){
    event?.preventDefault()

    const dataCalls = {
      date_schedule: dateScheduling,
      date_service: dateCalls,
      time_service: hour,
      price: value,
      status_service: status,
      client_id: patient?.id,
      specialist_id: 29,
    }

    try {
      const response = await api.post('services', dataCalls);
          
      if(response.status === 201) toast.success("Agendamento realizado com sucesso")

    } catch (error) {

      const errors = error.response.data?.erro

      errors.map((erro: string) => toast.error(erro));
      
    }
  }

  useEffect(() => {
    api.get('professions').then(
      response => {
        setProfessions(response.data)
      }
    )
  }, []);

  async function handleCpf(event: FocusEvent<HTMLInputElement>){
    event.preventDefault();

    const clients = await api.get('clients')
    
    const clientExist = clients?.data.find((client: any)=> client.cpf === cpf )
    if(!clientExist){
      toast.error('Cpf inválido.')
    }

    setPatient(clientExist)
    
  }

  useEffect(() => {
    api.get('specialists').then(
      response => {
        const specialistsFilter = response?.data
        .filter( (specialist:any ) => 
          specialist.profession.id === Number(professionSelected)
        );
        setSpecialists(specialistsFilter)
      }
    )
  }, [professionSelected])
  return (<>
      <input className="calls-input" type="text" placeholder={moment().format('llll')} value={moment().format('llll')} />
    <form onSubmit={handleCalls}  className="form-calls">
      {/* <p>{moment().format('llll')}</p> */}

      <div className="data-calls">
        <div >
          <h4>Paciente:</h4>
          <div className="info-patient">
            <h4>CPF</h4>
            <input type="text" id="cpfPatient" placeholder="CPF do Paciente" value={cpf} onBlur={handleCpf} onChange={(e) => setCpf(e.target.value)} required />
          </div>
          {patient && 
          <div className="info-patient">
            <h4>Nome</h4>
            <input type="text" id="namePatient" placeholder="Nome do Paciente" value={patient.name} required />
          </div>
          }
        </div>
        <div className="specialist-full">
          <div>

            <h4>Especialidade:</h4>
            <select name="Especialidade" id="status" className="profession-select" value={professionSelected} onChange={(e) => setProfessionSelected(e.target.value)}  required>
              {professions.map(profession => (
                <option key={profession.id} value={profession.id}>{profession.name}</option>
                ))}  
            </select>
            {
              professionSelected &&
              <select name="Especialidade"id="status" className="specialist-select"  value={specialistsSelected} onChange={(e) => setSpecialistsSelected(e.target.value)}  required>
                  {specialists.map(specialist => (
                    <option key={specialist.id} value={specialist.id}>{specialist.name}</option>
                    ))}
                      
                </select>
            }
          </div>
        </div>
        <div className="date-hour">
          <div>
            <h4>Atendimento:</h4>
            <div className="date-time">
              <input type="date" id="date" placeholder="Data:" value={dateCalls} onChange={(e) => setDateCalls(e.target.value)} required />

              <input type="time" id="time" placeholder="Hora:" value={hour} onChange={(e) => setHour(e.target.value)} required />
              
              <div className="value-status">
                <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="status">Status</option>
                    <option value="AGENDADO">Agendado</option>
                    <option value="REALIZADO">Realizado</option>
                    <option value="CANCELADO">Cancelado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

          <input type="text" id="value" placeholder="Valor:" value={value} onChange={(e) => setValue(e.target.value)} required />
              
      </div>         
      <button className="btnPatientForm" type="submit">Cadastrar <FiArrowRight size={18} /></button>
    </form>
    </>
  )
}

export default CallsForm;