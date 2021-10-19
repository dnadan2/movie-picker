import React from 'react';
import FilmBanner from '../FilmBanner/FilmBanner';

const StreamingAvailabilityChoice: React.FC = () => {
  return (
    <FilmBanner
      imageUrl="https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
      testID="film-banner"
    />
  );
};

export default StreamingAvailabilityChoice;
