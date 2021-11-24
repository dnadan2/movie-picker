import { createStore } from 'redux';
import rootReducer from '../rootReducers';

const configureMockStore: any = () => {

  const store = createStore(
    rootReducer,
    undefined,
    undefined
  );

  return store;
};

export const mockStore: any = ({
  initialState = undefined,
}) => {
  return configureMockStore(initialState);
};
