import { createStore } from 'redux';
import rootReducer from '../rootReducers';
import { RootState } from '../types';

const configureMockStore: any = (initialState: RootState) => {
  const store = createStore(rootReducer, initialState, undefined);

  return store;
};

export const mockStore: any = (initialState: RootState = undefined) => {
  return configureMockStore(initialState);
};
