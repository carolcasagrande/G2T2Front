import ServicesTypes from './services.types'

const INITIAL_STATE = {
  services: null
}

const ServicesReducer = (state =  INITIAL_STATE  , action) => {
  switch (action.type) {
    case ServicesTypes.SET_SERVICES_WAITING_APPOINTMENT:
      return {
        ...state,
        servicesWaitingAppointment: action.payload
      };
      case ServicesTypes.SET_SERVICES_DONE:
        return {
          ...state,
          servicesDone: action.payload
        };
      case ServicesTypes.ACTIVE_SERVICE:
        return {
          ...state,
          activeService: action.payload
        };
    default:
      return state;
  };
}

export default ServicesReducer;