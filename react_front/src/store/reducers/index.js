
export * from './auth'
export * from './echo'
export * from './email'

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { authReducer, echoReducer, emailReducer } from '../reducers'
import { articlesReducer, remoteArticlesReducer } from './article.js';

const createRootReducer = (history) => combineReducers({
  auth: authReducer,
  echo: echoReducer,
  router: connectRouter(history), 
  articles: articlesReducer, 
  remoteArticles: remoteArticlesReducer,
  email: emailReducer,
})

export default createRootReducer

