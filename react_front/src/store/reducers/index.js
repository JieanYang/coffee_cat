// src/store/reducers/index.js

export * from './echo';

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth, * as fromAuth from './auth.js'

import { articlesReducer, remoteArticlesReducer } from './article.js';


export default combineReducers({
  auth: auth,
  router: routerReducer, 
  articles: articlesReducer, 
  remoteArticles: remoteArticlesReducer
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired =state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)

export const withAuth = (headers={}) => {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}