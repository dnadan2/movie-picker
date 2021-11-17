import { put, takeLatest } from 'redux-saga/effects';
import { onGetStreamingAvailability } from '../../actions/streamingAvailabilityAction';
import { getAvailability } from '../../Api/StreamingAvailability/streamingAvailability';

function* getFilmAvailabilityFunction() {
  const response = yield getAvailability('us', 'netflix', 'movie', '1', 'en');

  yield put(onGetStreamingAvailability.success(response));
}

export function* getFilmAvailabilitySaga() {
  yield takeLatest(
    [onGetStreamingAvailability.request],
    getFilmAvailabilityFunction
  );
}
