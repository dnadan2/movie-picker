import { expectSaga } from 'redux-saga-test-plan';
import { onGetStreamingAvailability } from '../../actions/streamingAvailabilityAction';
import { getFilmAvailabilitySaga } from './get-film-availability-sagas';
import * as streamingAvailability from '../../api/StreamingAvailability/StreamingAvailability';
import { RecursivePartial } from '../../types';
import { StreamingAvailabilityItems } from '../../Api/StreamingAvailability/interfaces';
import { StreamingAvailabilitySelector } from '../../redux/streamingAvailability/streamingAvailabilitySelector';

describe('Saga: get film availability', () => {
  test('getFilmAvailabilitySaga', () => {
    const expectedResult: RecursivePartial<StreamingAvailabilityItems[]> = [
      { posterURLs: { original: '' } },
    ];

    const mockGetAvailability = jest.fn().mockReturnValue(expectedResult);

    jest
      .spyOn(streamingAvailability, 'getAvailability')
      .mockImplementation(mockGetAvailability);

    return expectSaga(getFilmAvailabilitySaga)
      .put(
        onGetStreamingAvailability.success(
          expectedResult as StreamingAvailabilityItems[]
        )
      )
      .dispatch(onGetStreamingAvailability.request())
      .run({ silenceTimeout: true })
      .then(() => {
        expect(mockGetAvailability).toHaveBeenCalled();
      });
  });

  test("don't call API if results exist in store", () => {
    const mockGetAvailability = jest.fn();

    jest
      .spyOn(streamingAvailability, 'getAvailability')
      .mockImplementation(mockGetAvailability);

    const mockStoredFilms: RecursivePartial<StreamingAvailabilityItems[]> = [
      { title: 'Space Odesey' },
    ];
    const mockGetAvailableFilms = jest
      .fn()
      .mockReturnValue({ mockStoredFilms });
    jest
      .spyOn(StreamingAvailabilitySelector, 'getAvailableFilms')
      .mockImplementation(mockGetAvailableFilms);

    return expectSaga(getFilmAvailabilitySaga)
      .put(
        onGetStreamingAvailability.success(
          mockStoredFilms as StreamingAvailabilityItems[]
        )
      )
      .dispatch(onGetStreamingAvailability.request())
      .run({ silenceTimeout: true })
      .then(() => {
        expect(mockGetAvailability).not.toHaveBeenCalled();
      });
  });
});
