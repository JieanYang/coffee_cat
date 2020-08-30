
export * from './auth'
export * from './echo'
export * from './persist_data'

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { authReducer, echoReducer, emailReducer, PersistDataReducer } from '../reducers'
import { articlesReducer, remoteArticlesReducer } from './article.js';

const createRootReducer = (history) => combineReducers({
  auth: authReducer,
  echo: echoReducer,
  router: connectRouter(history), 
  articles: articlesReducer, 
  remoteArticles: remoteArticlesReducer,
  persist_data: PersistDataReducer
})

export default createRootReducer

