
import { SET_MENU } from '../actions'

const initalState = {
    menu: "Home"
}

export const PersistDataReducer = (state=initalState, action) => {
    switch(action.type) {
        case SET_MENU:
            return { menu: action.payload }
        default:
            return state
    }
}