import ServicesTypes from './services.types'

const INITIAL_STATE = {
  services: null
}

const ServicesReducer = (state =  INITIAL_STATE  , action) => {
  switch (action.type) {
    case ServicesTypes.SET_SERVICES:
      return {
        ...state,
        services: action.payload
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