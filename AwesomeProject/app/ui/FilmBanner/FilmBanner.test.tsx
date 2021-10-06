import { create } from 'react-test-renderer';
import FilmBanner from './FilmBanner';
import React from 'react';

describe('film banner', () => {
  test('should display a film banner', () => {
    const rendered = create(
      <FilmBanner imageUrl="../assets/film_banner.jpeg"></FilmBanner>
    );

    expect(
      rendered.root.findByProps({ testID: 'film-banner-image' })
    ).toBeDefined();
  });
});
