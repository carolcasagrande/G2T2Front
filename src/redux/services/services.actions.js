import ServicesTypes from './services.types'

export const setServicesWaitingAppointment = (services) => ({
  type: ServicesTypes.SET_SERVICES_WAITING_APPOINTMENT,
  payload: services
});

export const setServicesDone = (services) => ({
  type: ServicesTypes.SET_SERVICES_DONE,
  payload: services
});

export const setServiceActive = (service) => ({
  type: ServicesTypes.ACTIVE_SERVICE,
  payload: service
});
