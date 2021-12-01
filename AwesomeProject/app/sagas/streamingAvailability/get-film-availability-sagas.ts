import { put, takeLatest } from 'redux-saga/effects';
import { onGetStreamingAvailability } from '../../actions/streamingAvailabilityAction';
import { StreamingAvailabilityItems } from '../../Api/StreamingAvailability/interfaces';
import { getAvailability } from '../../Api/StreamingAvailability/streamingAvailability';

function* getFilmAvailabilityFunction() {
  const response: StreamingAvailabilityItems[] = yield getAvailability(
    'us',
    'netflix',
    'movie',
    '1',
    'en'
  );

  yield put(onGetStreamingAvailability.success(response));
}

export function* getFilmAvailabilitySaga() {
  yield takeLatest(
    [onGetStreamingAvailability.request],
    getFilmAvailabilityFunction
  );
}
