import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  AnyAction
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from '@redux-saga/core/effects';

// Reducers & Sagas
// import { authReducer, authSaga } from './auth';
// import { usersReducer } from './users';
import { weatherReducer, weatherSaga } from './weather';

const metaReducers: Reducer<any, AnyAction> = combineReducers({
  // auth: authReducer,
  // users: usersReducer,
  weather: weatherReducer
});

// Saga
function* rootSaga() {
  yield all([...weatherSaga]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares: any = [sagaMiddleware];

const store = createStore(
  metaReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
