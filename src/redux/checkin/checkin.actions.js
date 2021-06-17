import CheckinTypes from './checkin.types'

export const setCheckinActive = (patient) => ({
  type: CheckinTypes.ACTIVE_CHECKIN,
  payload: patient
});

