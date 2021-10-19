import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { configuredStore } from './configureStore';
import { onGetStreamingAvailability } from './actions/streamingAvailabilityAction';
import StreamingAvailabilityChoice from './ui/StreamingAvailabilityChoice/StreamingAvailabilityChoice';

const App = () => {
  const dispatch = useDispatch();
  const store = configuredStore;
  dispatch(onGetStreamingAvailability.request());

  return (
    <SafeAreaView>
      <Provider store={store}>
        <StreamingAvailabilityChoice />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
