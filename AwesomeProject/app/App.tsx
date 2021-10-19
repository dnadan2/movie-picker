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
      <FilmBanner imageUrl="https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg" />
    </SafeAreaView>
  );
};

export default App;
