import { useState, FocusEvent, FormEvent} from 'react';
import axios from 'axios';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import api from '../../service/api';
import {toast} from 'react-toastify';
import { zipCodeMask, cpfMask, phoneMask, mobileMask } from '../../utils/Mask';
import './styles.css';

// import { Container } from './styles';

interface IAddress{
    zipcode: string;
    street: string;
    street_number: string;
    district: string;
    city: string;
    federative_unit: string;
}
  
interface IPatient{
    name: string,
    cpf: string,
    type_blood: string,
    phone?: string,
    mobile: string,
    email: string
}

const PatientForm: React.FC = () => {

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState<IAddress>({} as IAddress);
    const [patient, setPatient] = useState<IPatient>({} as IPatient)
    
    const blood_types = ["A+","A-", "B+", "B-", "O+","O-", "AB+", "AB-" ];
  
    async function handleCep(event: FocusEvent<HTMLInputElement>){
        event.preventDefault();    
  
        const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        setAddress({
          zipcode: res.data.cep,
          street: res.data.logradouro,
          street_number: res.data.numero,
          district: res.data.bairro,
          city: res.data.localidade,
          federative_unit: res.data.uf,
        });
    }
  
    async function handleLogin(event: FormEvent<HTMLFormElement>){
      event.preventDefault();
      const addressApi = await api.post('address', address);
      
      const newClient = {
        ...patient,
        address_id: addressApi.data.id
      }
      try {
        const client = await api.post('clients', newClient )
  
        if (client.status === 201)  toast.success("Cliente cadastrado com sucesso")
      } catch (error) {
  
        const errors = error.response.data?.erro
  
        if(typeof errors === 'string'){
          toast.error(errors)
        } else {
          errors?.map((erro: string) => toast.error(erro));
        }
      }    
    } 
  

  return (
    <div className="form-content">
                <form onSubmit={handleLogin}  className="form-patient  ">
                    <div className="data-patient">
                      <input type="text" id="name" className="input-full" placeholder="Nome completo"value={patient?.name} onChange={(e) => setPatient({...patient, name: e.target.value})} />
                      <div className="cpf-sangue">
                        <input type="text" id="cpf"  placeholder="CPF"  value={patient.cpf} onChange={(e) => setPatient({...patient, cpf: cpfMask(e.target.value)})} required />

                        <select className="select-blood" name="Tipo Sanguíneo" id="type_blood" value={patient.type_blood} onChange={(e) => setPatient({...patient, type_blood: e.target.value})}  required>
                            {blood_types.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}     
                        </select>
                      </div>
                      <div className="cel-tel">
                          <input type="text" id="tel" placeholder="Tel" value={patient.phone} onChange={(e) => setPatient({...patient, phone: phoneMask(e.target.value)})} required  />
                          <input type="text" id="cel" placeholder="Cel" value={patient.mobile} onChange={(e) => setPatient({...patient, mobile: mobileMask(e.target.value)})} required  />
                      </div>
                      <input type="email" id="email" className="input-full" placeholder="Email" value={patient.email} onChange={(e) => setPatient({...patient, email: e.target.value})} />
                      
                  </div>
                  <h3>Endereço:</h3>
                  <div className="address">
                    <input type="text" id="cep" className="input-full" placeholder="CEP"  value={cep} onBlur={handleCep} onChange={(e) => setCep(zipCodeMask(e.target.value))} required />
                    <input type="text" id="logradouro" className="input-full" placeholder="Logradouro"  value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})} required  />
                    <div className="compl-bairro">
                      <input type="text" id="num" placeholder="Número" value={address.street_number} onChange={(e) => setAddress({...address, street_number: e.target.value})} required  />
                      <input type="text" id="bairro" placeholder="Bairro"  value={address.district} onChange={(e) => setAddress({...address, district: e.target.value})} required />
                    </div>
                    <div className="city-uf">
                      <input type="text" id="cidade" placeholder="Cidade"  value={address.city} onChange={(e) => setAddress({...address, city: e.target.value})} required  />
                      <input type="text" id="uf" placeholder="UF"  value={address.federative_unit} onChange={(e) => setAddress({...address, federative_unit: e.target.value})} required />
                    </div>
                  </div>
                  <button className="btnPatientForm" type="submit">Cadastrar <FiArrowRight size={15} /></button>
                </form>
              </div>
    );
}

export default PatientForm;
