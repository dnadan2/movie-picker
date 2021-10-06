import { SagaMiddleware } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { getFilmAvailabilitySaga } from './sagas/streamingAvailability/get-film-availability-sagas';

function* rootSaga() {
  yield all([getFilmAvailabilitySaga]);
}

export const registerSagas = (sagaMiddleware: SagaMiddleware) => {
  sagaMiddleware.run(rootSaga);
};
