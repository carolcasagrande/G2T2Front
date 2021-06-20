import ActiveTypes from './active.types'

export const setActive = (patientOrService) => ({
  type: ActiveTypes.ACTIVE_PATIENT_OR_SERVICE,
  payload: patientOrService
});

