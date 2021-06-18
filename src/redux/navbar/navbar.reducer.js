import NavbarTypes from './navbar.types'

const INITIAL_STATE = {
  activeReceptionistNavbar: 'scheduling'
}

const NavbarReducer = (state =  INITIAL_STATE  , action) => {
  switch (action.type) {
    case NavbarTypes.ACTIVE_RECEPTIONIST_NAVBAR:
      return {
        ...state,
        activeReceptionistNavbar: action.payload
      };
    default:
      return state;
  };
}

export default NavbarReducer;