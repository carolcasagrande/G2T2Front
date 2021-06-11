import React from 'react';
import record from '../../../img/atend3.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import "./styles.css"

const Record: React.FC = () =>{
  return (
    <div className="record">
      <body>
        <div className="container">     
          <main>   
            <aside className="aside-left">
              <img src={record} className="img-record" alt="Registro Prontuário" />
            </aside>
            <aside className="aside-right">
              <div className="form-content">
                <form /* onSubmit={handleLogin} */ className="form-record">
                  <h1>Prontuário | Registro</h1>
                  <div className="data-record">
                      <div className="date">
                          <input type="date" id="date" placeholder="Data:" /* value={date} onChange={(e) => setLogin(e.target.value)} required */ />
                      </div>
                      <div>
                          <input type="text" id="name" className="input-full" placeholder="Digite o Nome do paciente:" /* value={name} onChange={(e) => setLogin(e.target.value)} required */ />
                          
                      </div>                  
                  </div>         
                  <button type="submit">Acessar <FiArrowRight size={25} /></button>
                </form>
              </div>
            </aside>
          </main>
        </div>
      </body>
    </div>
  );
}

export default Record;


