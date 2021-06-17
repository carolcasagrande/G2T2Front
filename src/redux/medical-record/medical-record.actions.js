import MedicalRecordTypes from './medical-record.types'

export const setMedicalRecordActive = (patient) => ({
  type: MedicalRecordTypes.ACTIVE_MEDICAL_RECORD,
  payload: patient
});

