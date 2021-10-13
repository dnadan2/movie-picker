import { expectSaga } from 'redux-saga-test-plan';
import { onGetFilmAvailability } from '../../actions/streamingAvailabilityAction';
import { getFilmAvailabilitySaga } from './get-film-availability-sagas';
import * as streamingAvailability from '../../api/StreamingAvailability/StreamingAvailability';
import { StreamingAvailabilityResponse } from '../../Api/StreamingAvailability/interfaces';

describe('Saga: get film availability', () => {
  test('getFilmAvailabilitySaga', () => {
    const expectedResult: Partial<StreamingAvailabilityResponse> = {
      posterURLs: { original: '' },
    };

    const mockGetAvailability = jest.fn().mockReturnValue(expectedResult);

    jest
      .spyOn(streamingAvailability, 'getAvailability')
      .mockImplementation(mockGetAvailability);

    return expectSaga(getFilmAvailabilitySaga)
      .put(
        onGetFilmAvailability.success(
          expectedResult as StreamingAvailabilityResponse
        )
      )
      .dispatch(onGetFilmAvailability.request())
      .run({ silenceTimeout: true })
      .then(() => {
        expect(mockGetAvailability).toHaveBeenCalled();
      });
  });
});
