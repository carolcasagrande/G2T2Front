import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import HomeHeader from '../Home-header';
import Client from '../Client';

import SearchIcon from '@material-ui/icons/Search';

import './styles.css';

const ClientsHistory: React.FC = () => {
  const services = useSelector((state: any) => state.services.servicesDone)
  const [searchField, setSearchField] = useState<String>('');
  
  const filteredServices = services?.filter((service: any ) =>
    service.client.name.toLowerCase().includes(searchField.toLowerCase())
  )
  
  return(
    <div className="medical-records-history-container">
      <HomeHeader title='Pacientes' />
      <div className="search">
        <div className="search-input">
          <SearchIcon style={{color: '#13132B'}}/>
          <input onChange={((e) => setSearchField(e.target.value))} placeholder="Buscar pacientes" />
        </div>
      </div>
      {
        services ?
          (
            filteredServices.map( (service: any) => {
            return (
                <Client service={service} key={service.id}/>
            )
          }))
        :
          (
            <div className='medicalrecords-history-list-not-selected'>
              <h3>Não há pacientes no seu histórico</h3>
            </div>
          )
        }
    </div>
  )
};

export default ClientsHistory;