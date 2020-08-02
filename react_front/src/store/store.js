
// auth
import storage from 'redux-persist/es/storage'
import apiMiddleware from './middleware/apiMiddleware';
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'

// src/js/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "./reducers/index";
import { forbiddenWordsMiddleware } from "./middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./sagas/api-sage";
import { createLogger } from 'redux-logger';

import { createBrowserHistory as createHistory } from 'history'

const history = createHistory()

export default function configureStore(preloadedState={}) {
	// auth
	const persistedFilter = createFilter('auth', ['access', 'refresh']);
	const reducer = persistReducer(
	    {
	      key: 'polls',
	      storage: storage,
	      whitelist: ['auth'],
	      transforms: [persistedFilter]
	    },
	    createRootReducer(history))

	const initialiseSagaMiddleware = createSagaMiddleware()

	const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
	  reducer, preloadedState,
	  storeEnhancers(
	    applyMiddleware(
	    	routerMiddleware(history),
	    	apiMiddleware,
	    	forbiddenWordsMiddleware, 
	    	initialiseSagaMiddleware,
	    	createLogger(), 
	    )
	  )
	)

	persistStore(store)
	
	initialiseSagaMiddleware.run(apiSaga)

	return store;
}
