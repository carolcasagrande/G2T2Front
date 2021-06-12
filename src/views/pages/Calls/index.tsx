import React, { useState, useEffect } from 'react';
import calls from '../../../img/doctor5.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import "./styles.css"
import api from '../../../service/api'
import { toast } from 'react-toastify';

interface IProfession {
  id: string, 
  name: string, 
}
interface ISpecialists {
  id: string, 
  name: string, 
}


const Calls: React.FC = () =>{
  const [patient, setPatient] = useState('');
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
      client_id: 14,
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

  return (
    <div className="calls">
      <body>
      <div className="container">  
        <main>   
          <aside className="aside-left">
            <img src={calls} className="img-calls" alt="atendimento" />
          </aside>
          <aside className="aside-right">
            <div className="form-content">
            <form onSubmit={handleCalls}  className="form-calls">
                <h1>Atendimentos</h1>
                <div className="data-calls">
                    <div>
                      <h4>Nome paciente:</h4>
                      <input type="text" id="namePatient" placeholder="Nome do Paciente" value={patient} onChange={(e) => setPatient(e.target.value)}  />
                      <h4>Nome Especialidade:</h4>
                      <select name="Especialidade" id="status" value={professionSelected} onChange={(e) => setProfessionSelected(e.target.value)}  required>
                        {professions.map(profession => (
                          <option key={profession.id} value={profession.id}>{profession.name}</option>
                        ))}
                            
                      </select>
                      {
                        professionSelected &&
                          <select name="Especialidade" id="status" value={specialistsSelected} onChange={(e) => setProfessionSelected(e.target.value)}  required>
                            {specialists.map(specialist => (
                              <option key={specialist.id} value={specialist.id}>{specialist.name}</option>
                            ))}
                                
                          </select>
                      }
                    </div>
                    <div>
                        <h3>Agendamento</h3>
                        <input type="date" id="date" placeholder="Data:" value={dateScheduling} onChange={(e) => setDateScheduling(e.target.value)} required />
                    </div>
                    <div>
                        <h3>Atendimento</h3>
                        <div className="date-time">
                            <input type="date" id="date" placeholder="Data:" value={dateCalls} onChange={(e) => setDateCalls(e.target.value)}  />
                            <input type="time" id="time" placeholder="Hora:" value={hour} onChange={(e) => setHour(e.target.value)}  />
                        </div>
                        <div className="value-status">
                        <input type="text" id="value" placeholder="Valor:" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="status">Selecione status</option>
                            <option value="AGENDADO">Agendado</option>
                            <option value="REALIZADO">Realizado</option>
                            <option value="CANCELADO">Cancelado</option>
                        </select>
                        </div>
                    </div>                    
                  </div>         
                  <button type="submit">Cadastrar <FiArrowRight size={25} /></button>
                </form>
              </div>
            </aside>
          </main>
        </div>
      </body>
    </div>
  );
}

export default Calls;

