import React from 'react';
import calls from '../../../img/doctor5.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import "./styles.css"

const Calls: React.FC = () =>{
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
              <form /* onSubmit={handleLogin} */ className="form-calls">
                <h1>Atendimentos</h1>
                <div className="data-calls">
                    <div>
                        <h3>Agendamento</h3>
                        <input type="date" id="date" placeholder="Data:" /* value={date} onChange={(e) => setLogin(e.target.value)} required */ />
                    </div>
                    <div>
                        <h3>Atendimento</h3>
                        <div className="date-time">
                            <input type="date" id="date" placeholder="Data:" /* value={date} onChange={(e) => setLogin(e.target.value)} required */ />
                            <input type="time" id="time" placeholder="Hora:" /* value={time} onChange={(e) => setLogin(e.target.value)} required */ />
                        </div>
                        <div className="value-status">
                        <input type="text" id="value" placeholder="Valor:" /* value={value} onChange={(e) => setLogin(e.target.value)} required */ />
                        <select name="status" id="status" required>
                            <option value="status">Selecione status</option>
                            <option value="agendado">Agendado</option>
                            <option value="realizado">Realizado</option>
                            <option value="cancelado">Cancelado</option>
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

