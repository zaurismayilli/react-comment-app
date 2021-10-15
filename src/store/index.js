import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store;