import { ECHO_SUCCESS } from '../actions'

const initialState = {
  message: ""
}

export const echoReducer = (state=initialState, action) => {
  switch(action.type) {
    case ECHO_SUCCESS:
      return {
        message: action.payload.message
      }
    default:
      return state
  }
}
