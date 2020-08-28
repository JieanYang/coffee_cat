import jwtDecode from 'jwt-decode'
import { LOGIN_SUCCESS, TOKEN_RECEIVED, LOGIN_FAILURE, TOKEN_FAILURE, LOGOUT } from '../actions'

const initialState = {
  access: undefined,
  refresh: undefined,
  errors: {},
}

export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access)
        },
        refresh: {
          token: action.payload.refresh,
          ...jwtDecode(action.payload.refresh)
        },
        errors: {}
      }
    case TOKEN_RECEIVED:
      return {
        ...state,
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access)
        }
      }
    case LOGIN_FAILURE:
    case TOKEN_FAILURE:
      return {
         access: undefined,
         refresh: undefined,
         errors: 
             action.payload.response || 
                {'non_field_errors': action.payload.statusText},
      }
    case LOGOUT:
      return initialState
    default:
      return state
    }
}

const accessToken = (state) => {
    if (state.auth.access) {
        return  state.auth.access.token
    }
}

const isRefreshTokenExpired = (auth) => {
  if (auth.refresh && auth.refresh.exp) {
    return 1000 * auth.refresh.exp - (new Date()).getTime() < 5000
  }
  return true
}
    
export const refreshToken = (state) => {
    if (state.auth.refresh) {
        return  state.auth.refresh.token
    }
}
    
export const isAccessTokenExpired = (state) => {
  if (state.auth.access && state.auth.access.exp) {
    return 1000 * state.auth.access.exp - (new Date()).getTime() < 5000
  }
  return true
}

export const authErrors = (state) => {
   return  state.auth.errors
}


export const withAuth = (headers={}) => {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}