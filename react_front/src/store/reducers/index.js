// src/store/reducers/index.js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    default:
      return state
  }
}

const remoteArticlesReducer = (state = [], action) => {
  switch(action.type) {
    case DATA_LOADED:
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
    default:
      return state;
  }
}

export default combineReducers({
  router: routerReducer, 
  articles: articlesReducer, 
  remoteArticles: remoteArticlesReducer
})