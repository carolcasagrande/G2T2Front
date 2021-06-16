import medicalRecordTypes from './medical-record.types'

const INITIAL_STATE = {
  activeMedicalRecord: null
}

const MedicalRecordReducer = (state =  INITIAL_STATE  , action) => {
  switch (action.type) {
    case medicalRecordTypes.ACTIVE_MEDICAL_RECORD:
      return {
        ...state,
        activeMedicalRecord: action.payload
      };
    default:
      return state;
  };
}

export default MedicalRecordReducer;