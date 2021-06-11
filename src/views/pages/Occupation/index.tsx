import React from 'react';
import occupation from '../../../img/equipe.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './styles.css'

const Occupation: React.FC = () =>{
  return (
    <div className="occupation">
      <body>
        <div className="container">    
          <main>   
            <aside className="aside-left">
              <img src={occupation} className="img-occupation" alt="equipe médica"/>
            </aside>
            <aside className="aside-right">
              <div className="form-content">
                <form /* onSubmit={handleLogin} */ className="form-occupation  ">
                  <h1>Cadastro | Profissão</h1>
                  <input type="text" id="occupation" placeholder="Digite o nome profissão" /* value={occupation} onChange={(e) => setLogin(e.target.value)} required */ />
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

export default Occupation;