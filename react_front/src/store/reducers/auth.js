import jwtDecode from 'jwt-decode'
import { LOGIN, LOGOUT, AUTH_ERRORS } from '../actions'

const initialState = {
  token: undefined,
  errors: {}
}

export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        token: action.payload.token
      }
    case LOGOUT:
      return initialState
    case AUTH_ERRORS:
      return {
        errors: action.payload
      }
    default:
      return state
    }
}

export const authErrors = (state) => {
   return  state.auth.errors
}


export const withAuth = (headers={'Content-Type': 'application/json'}) => {
  return (state) => {
    console.log("withAuth", state.auth.token)
    return {
      ...headers,
      'Authorization': `Token ${state.auth.token}`
    }
  }
}






// ==================================================

export const isAuthenticated = (state) => {	
  if (state.auth.token) return true
}