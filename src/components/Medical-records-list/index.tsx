import React from 'react';

import { useSelector } from 'react-redux'

import "./styles.css"

import HomeHeader from '../Home-header';
import MedicalRecord from '../Medical-record';

const MedicalRecordsList: React.FC = () =>{
  const activeMedicalRecords = useSelector((state: any) =>
    state.active.activePatientOrService?.medical_record.medical_records_history
  )
  return (
    <>
      <HomeHeader title='Histórico do paciente' />
      <div className="medical-records-container">
        {activeMedicalRecords ?
          (
            activeMedicalRecords.map((activeMedicalRecord: any) => {
              return <MedicalRecord activeMedicalRecord={activeMedicalRecord} key={activeMedicalRecord.id} />
            })
          )
          :
            (
              <div className='medical-record-history-not-selected'>
                <h3>Selecione um paciente para ver o histórico de prontuário</h3>
              </div>
            )

        }
      </div>
    </>
              
  );
}

export default MedicalRecordsList;
