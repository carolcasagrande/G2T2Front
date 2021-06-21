import UserTypes from './user.types'

export const setCurrentUser = (user) => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
});

export const logoutCurrentUser = () => ({
  type: UserTypes.LOGOUT_USER,
  payload: null
});

