
export * from './auth'
export * from './echo'
export * from './email'

import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function getData(url) {
  return { type: "DATA_REQUESTED", payload: {url} };
}