import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export const articlesReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return state.concat(action.payload)
    default:
      return state
  }
}

export const remoteArticlesReducer = (state=[], action) => {
  switch(action.type) {
    case DATA_LOADED:
      return state.concat(action.payload)
    default:
      return state
  }
}