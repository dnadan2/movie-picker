import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { configuredStore } from './store/configureStore';
import { onGetStreamingAvailability } from './actions/streamingAvailabilityAction';
import StreamingAvailabilityChoice from './ui/StreamingAvailabilityChoice/StreamingAvailabilityChoice';

const Root = () => {
  const dispatch = useDispatch();
  dispatch(onGetStreamingAvailability.request());

  return (
    <SafeAreaView>
        <StreamingAvailabilityChoice />
    </SafeAreaView>
  );
}

const App = () => {
  const store = configuredStore;
  return (
      <Provider store={store}>
        <Root />
      </Provider>
  );
};

export default App;
