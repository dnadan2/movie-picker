import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { StreamingAvailabilitySelector } from '../../redux/streamingAvailability/streamingAvailabilitySelector';
import FilmBanner from '../FilmBanner/FilmBanner';

const StreamingAvailabilityChoice: React.FC = () => {
  const availableFilms = useSelector(
    StreamingAvailabilitySelector.getAvailableFilms
  );

  const getImageUrl = () => availableFilms.films[0].posterURLs.original;

  return (
    <>
      {availableFilms && availableFilms.films.length > 0 ? (
        <FilmBanner imageUrl={getImageUrl()} testID="film-banner" />
      ) : (
        <Text>sometext</Text>
      )}
    </>
  );
};

export default StreamingAvailabilityChoice;
