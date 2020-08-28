import jwtDecode from 'jwt-decode'
import { LOGIN, LOGOUT } from '../actions'

const initialState = {
  token: undefined,
  errors: {}
}

export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        token: action.payload
      }
    case LOGOUT:
      return initialState
    default:
      return state
    }
}

export const authErrors = (state) => {
   return  state.auth.errors
}


export const withAuth = (headers={}) => {
  return (state) => ({
    ...headers,
    'Authorization': ``
  })
}