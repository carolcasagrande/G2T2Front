import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Axios
import api from '../../service/api';

import WaitingList from '../Waiting-list';
import MedicalRecordForm from '../Medical-record-form';
import MedicalRecordsList from '../Medical-records-list';

import { setServicesWaitingAppointment } from '../../redux/services/services.actions.js';

import './styles.css'

const SpecialistAppointment: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser);

  useEffect(() => {
    const status = 'aguardando-atendimento'
    const specialist_id = currentUser?.specialist_id

    try {
      api.get(`services/${specialist_id}/${status}`).then(response => {
        dispatch(setServicesWaitingAppointment(response.data));
      })  
    } catch (error) {
      alert('Algo deu errado: Por favor recarregue a página!')
    }
  }, [])

  return(
  <>
    <div className="column column-small">
      <WaitingList />
    </div>
    <div className="column column-medium">
      <MedicalRecordsList />
    </div>
    <div className="column column-medium">
      <MedicalRecordForm />
    </div>
    </>
  )
};

export default SpecialistAppointment;