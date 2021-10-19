import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import FilmBanner from './ui/FilmBanner/FilmBanner';
import { configuredStore } from './configureStore';
import { onGetStreamingAvailability } from './actions/streamingAvailabilityAction';

const App = () => {
  const dispatch = useDispatch();
  const store = configuredStore;
  dispatch(onGetStreamingAvailability.request());

  return (
    <SafeAreaView>
      <Provider store={store}>
        <FilmBanner imageUrl="https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg" />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
