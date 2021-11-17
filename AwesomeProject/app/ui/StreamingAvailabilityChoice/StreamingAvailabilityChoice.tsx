import React from 'react';
import { useSelector } from 'react-redux';
import { StreamingAvailabilitySelector } from '../../redux/streamingAvailability/streamingAvailabilitySelector';
import FilmBanner from '../FilmBanner/FilmBanner';

const StreamingAvailabilityChoice: React.FC = () => {
  const films = useSelector(StreamingAvailabilitySelector.getAvailableFilms);

  return (
    <FilmBanner
      imageUrl={films.films.posterURLs.original}
      testID="film-banner"
    />
  );
};

export default StreamingAvailabilityChoice;
