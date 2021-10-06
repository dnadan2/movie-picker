import { takeLatest } from 'redux-saga/effects';
import { onGetFilmAvailability } from '../../actions/streamingAvailabilityAction';
import { StreamingAvailabilityResponse } from '../../api/StreamingAvailability/interfaces';
import { getAvailability } from '../../api/StreamingAvailability/StreamingAvailability';

function* getFilmAvailabilityFunction() {
  console.log('aaas');
  var a: StreamingAvailabilityResponse = {
    posterURLs: { original: 'aaa' },
    title: 'aaa',
    overview: '',
    video: '',
  };

  const response = yield getAvailability('us', 'netflix', 'movie', '1', 'en');
  console.log('aaas');
  return response;
}

export function* getFilmAvailabilitySaga() {
  yield takeLatest(
    [onGetFilmAvailability.success],
    getFilmAvailabilityFunction
  );
}
