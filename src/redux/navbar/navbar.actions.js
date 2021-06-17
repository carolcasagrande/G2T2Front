import NavbarTypes from './navbar.types'

export const setSpecialistNavbarActive = (activeTab) => ({
  type: NavbarTypes.ACTIVE_SPECIALIST_NAVBAR,
  payload: activeTab
});

export const setReceptionistNavbarActive = (activeTab) => ({
  type: NavbarTypes.ACTIVE_RECEPTIONIST_NAVBAR,
  payload: activeTab
});

