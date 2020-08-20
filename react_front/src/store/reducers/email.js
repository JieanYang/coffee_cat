import { SEND_EMAIL } from '../actions'

const initialState = ''

export const emailReducer = (state=initialState, action) => {
  switch(action.type) {
    case SEND_EMAIL:
      return action.payload
    default:
      return state
  }
}
