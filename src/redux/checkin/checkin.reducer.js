import CheckinTypes from './checkin.types'

const INITIAL_STATE = {
  activeCheckin: null
}

const CheckinReducer = (state =  INITIAL_STATE  , action) => {
  switch (action.type) {
    case CheckinTypes.ACTIVE_CHECKIN:
      return {
        ...state,
        activeCheckin: action.payload
      };
    default:
      return state;
  };
}

export default CheckinReducer;