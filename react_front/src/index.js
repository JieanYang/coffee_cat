// src/index.js

import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { persistStore } from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import configureStore from "./store/store"
import App from "./App/App"

const store = configureStore()
const persistor = persistStore(store)

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)


console.log("================================")
console.log("APP_NODE_ENV: ", APP_NODE_ENV)
console.log("================================")