import NavbarTypes from './navbar.types'

export const setReceptionistNavbarActive = (activeTab) => ({
  type: NavbarTypes.ACTIVE_RECEPTIONIST_NAVBAR,
  payload: activeTab
});

