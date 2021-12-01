import { put, select, takeLatest } from 'redux-saga/effects';
import { onGetStreamingAvailability } from '../../actions/streamingAvailabilityAction';
import { getAvailability } from '../../Api/StreamingAvailability/streamingAvailability';
import { StreamingAvailabilitySelector } from '../../redux/streamingAvailability/streamingAvailabilitySelector';

function* getFilmAvailabilityFunction() {
  let availableFilms = yield select(
    StreamingAvailabilitySelector.getAvailableFilms
  );

  if (!availableFilms || availableFilms.length == 0) {
    availableFilms = yield getAvailability('us', 'netflix', 'movie', '1', 'en');
  }

  yield put(onGetStreamingAvailability.success(availableFilms));
}

export function* getFilmAvailabilitySaga() {
  yield takeLatest(
    [onGetStreamingAvailability.request],
    getFilmAvailabilityFunction
  );
}
