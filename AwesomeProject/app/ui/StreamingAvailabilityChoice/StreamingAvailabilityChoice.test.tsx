import { create } from 'react-test-renderer';
import React from 'react';
import StreamingAvailabilityChoice from './StreamingAvailabilityChoice';
import {StreamingAvailabilitySelector} from '../../redux/streamingAvailability/streamingAvailabilitySelector';
import { Provider } from 'react-redux';
import { StreamingAvailabilityState } from '../../redux/streamingAvailability/interfaces';
import { RecursivePartial } from '../../types';
import { mockStore } from '../../store/mockStore';

describe('StreamingAvailabilityChoice', () => {
  test('should display a FilmBanner', () => {
    const rendered = create(<StreamingAvailabilityChoice />);

    expect(rendered.root.findByProps({ testID: 'film-banner' })).toBeDefined();
  });

  test('should display image from streaming availability API call', () => {
    const films: RecursivePartial<StreamingAvailabilityState> = { films: { posterURLs: { original: 'someURL' }}};
    const rendered = create(<Provider store={mockStore(films)}><StreamingAvailabilityChoice /></Provider>);

    const mockGetAvailableFilms = jest.fn().mockReturnValue({films});
    jest.spyOn(StreamingAvailabilitySelector, 'getAvailableFilms').mockImplementation(mockGetAvailableFilms);

    expect(rendered.root.findByProps({ testID: 'film-banner' }).props.imageUrl).toEqual('someURL');
  });
});
