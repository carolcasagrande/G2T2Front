import ServicesTypes from './services.types'

export const setServices = (services) => ({
  type: ServicesTypes.SET_SERVICES,
  payload: services
});

export const setServiceActive = (service) => ({
  type: ServicesTypes.ACTIVE_SERVICE,
  payload: service
});
