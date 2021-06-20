import ActiveTypes from './active.types'

const INITIAL_STATE = {
  activePatientOrService: null
}

const ActiveReducer = (state =  INITIAL_STATE  , action) => {
  switch (action.type) {
    case ActiveTypes.ACTIVE_PATIENT_OR_SERVICE:
      return {
        ...state,
        activePatientOrService: action.payload
      };
    default:
      return state;
  };
}

export default ActiveReducer;