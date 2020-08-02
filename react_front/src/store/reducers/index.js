
export * from './auth'

import { combineReducers } from 'redux'
import { authReducer } from '../reducers'
import echo, * as fromEcho from './echo'


import { connectRouter } from 'connected-react-router'

import { articlesReducer, remoteArticlesReducer } from './article.js';

const createRootReducer = (history) => combineReducers({
  auth: authReducer,
  echo: echo,
  router: connectRouter(history), 
  articles: articlesReducer, 
  remoteArticles: remoteArticlesReducer,
})

export default createRootReducer

export const serverMessage = state => fromEcho.serverMessage(state.echo)
