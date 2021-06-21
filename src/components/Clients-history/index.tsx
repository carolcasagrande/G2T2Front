import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './styles.css';

import HomeHeader from '../Home-header';
import SearchInput from '../Search-input';
import Client from '../Client';

import SearchIcon from '@material-ui/icons/Search';

const ClientsHistory: React.FC = () => {
  const services = useSelector((state: any) => state.services.servicesDone)
  const [searchField, setSearchField] = useState<String>('');
  
  const filteredServices = services?.filter((service: any ) =>
    service.client.name.toLowerCase().includes(searchField.toLowerCase())
  )
  
  return(
    <div className="medical-records-history-container">
      <HomeHeader title='Pacientes' />  
      <SearchInput setSearchField={setSearchField}/>
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