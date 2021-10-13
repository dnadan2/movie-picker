import { put, takeLatest } from 'redux-saga/effects';
import { onGetFilmAvailability } from '../../actions/streamingAvailabilityAction';
import { StreamingAvailabilityResponse } from '../../api/StreamingAvailability/interfaces';
import { getAvailability } from '../../api/StreamingAvailability/StreamingAvailability';

function* getFilmAvailabilityFunction() {
  const response = yield getAvailability('us', 'netflix', 'movie', '1', 'en');

  yield put(onGetFilmAvailability.success(response));
}

export function* getFilmAvailabilitySaga() {
  yield takeLatest(
    [onGetFilmAvailability.request],
    getFilmAvailabilityFunction
  );
}
