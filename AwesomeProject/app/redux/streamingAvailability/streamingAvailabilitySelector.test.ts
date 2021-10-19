import { StreamingAvailabilitySelector } from './streamingAvailabilitySelector';

describe('Selector: getAvailableFilms', () => {
  test('should return films', () => {
    const initialState: any = {
      films: [
        {
          title: 'some-title',
        },
      ],
    };

    const response =
      StreamingAvailabilitySelector.getAvailableFilms(initialState);

    expect(response[0].title).toEqual('some-title');
  });
});
