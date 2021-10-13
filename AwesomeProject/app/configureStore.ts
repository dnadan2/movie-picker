import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducers';
import { registerSagas } from './rootSagas';

const configureStore: any = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(sagaMiddleware)
  );

  registerSagas(sagaMiddleware);
  return store;
};

export const configuredStore = configureStore();
