import { RecursivePartial, RootState } from '../../types';
import { StreamingAvailabilitySelector } from './streamingAvailabilitySelector';

describe('Selector: getAvailableFilms', () => {
  test('should return films', () => {
    const initialState: RecursivePartial<RootState> = {
      streamingAvailabilityReducer: [ { 
        title: "some-title"
      }]    
    };
    

    const response =
      StreamingAvailabilitySelector.getAvailableFilms(initialState as RootState);

    expect(response[0].title).toEqual('some-title');
  });
});
