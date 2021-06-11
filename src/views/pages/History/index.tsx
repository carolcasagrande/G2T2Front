import React from 'react';
import history from '../../../img/historico.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import "./styles.css"

const History: React.FC = () =>{
  return (
    <div className="history">
      <body>
        <div className="container">   
          <main>   
            <aside className="aside-left">
              <img src={history} className="img-history" alt="Histórico de Atendimentos" />
            </aside>
            <aside className="aside-right">
              <div className="form-content">
                <form /* onSubmit={handleLogin} */ className="form-history">
                  <h1>Histórico dos Atendimentos</h1>
                  <div className="data-history">                    
                          <div className="date-time">
                              <input type="date" id="date" placeholder="Data:" /* value={date} onChange={(e) => setLogin(e.target.value)} required */ />
                              <input type="time" id="time" placeholder="Hora:" /* value={time} onChange={(e) => setLogin(e.target.value)} required */ />
                          </div>      
                          <input type="text" id="specialist"  className="input-full" placeholder="Especialista" /* value={specialist} onChange={(e) => setLogin(e.target.value)} required */ />
                            
                          <textarea name="description" className="description" placeholder="Descrição:" id="description" cols={66} rows={24}></textarea>      
                  </div>         
                  <button type="submit">Registrar <FiArrowRight size={25} /></button>
                </form>
              </div>
            </aside>
          </main>
        </div>
      </body>
    </div>
  );
}

export default History;
