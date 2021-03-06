import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Axios
import api from '../../service/api';

import ClientsHistory from '../Clients-history';
import MedicalRecordsList from '../Medical-records-list';

import { setServicesDone } from '../../redux/services/services.actions.js';

import './styles.css'

const SpecialistHistory: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser);

  useEffect(() => {
    const status = 'realizado'
    const specialist_id = currentUser?.specialist_id
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
      <MedicalRecordsList />
    </div>
    </>
  )
};

export default SpecialistHistory;