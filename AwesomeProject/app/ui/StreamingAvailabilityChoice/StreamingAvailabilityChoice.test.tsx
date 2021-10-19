import { create } from 'react-test-renderer';
import React from 'react';
import StreamingAvailabilityChoice from './StreamingAvailabilityChoice';

describe('StreamingAvailabilityChoice', () => {
  test('should display a FilmBanner', () => {
    const rendered = create(<StreamingAvailabilityChoice />);

    expect(rendered.root.findByProps({ testID: 'film-banner' })).toBeDefined();
  });
});
