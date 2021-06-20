import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Axios
import api from '../../service/api';

import ClientsHistory from '../Clients-history';
import MedicalRecordsShow from '../Medical-records-show';

import { setServicesDone } from '../../redux/services/services.actions.js';

import './styles.css'

const SpecialistHistory: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const status = 'realizado'
    const specialist_id = '1'
    try {
      api.get(`services/${specialist_id}/${status}`).then(response => {
        dispatch(setServicesDone(response.data));
      })  
    } catch (error) {
      prompt('Algo deu errado: Por favor recarregue a página!')
    }
  }, [])

  return(
  <>
    <div className="column column-large">
      <ClientsHistory />
    </div>
    <div className="column column-large">
      <MedicalRecordsShow />
    </div>
    </>
  )
};

export default SpecialistHistory;