import React from 'react';
import { SafeAreaView } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { getAvailability } from './api/StreamingAvailability/StreamingAvailability';
import FilmBanner from './ui/FilmBanner/FilmBanner';
import { registerSagas } from './rootSagas';
import { configuredStore } from './configureStore';

const App = () => {
  const store = configuredStore();

  return (
    <SafeAreaView>
      <FilmBanner imageUrl="../assets/film_banner.jpeg" />
    </SafeAreaView>
  );
};

export default App;
