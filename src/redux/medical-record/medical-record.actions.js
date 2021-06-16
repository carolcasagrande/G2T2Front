import MedicalRecordTypes from './medical-record.types'

export const setMedicalRecordActive = (id) => ({
  type: MedicalRecordTypes.ACTIVE_MEDICAL_RECORD,
  payload: id
});

