import { combineReducers } from 'redux';
import { streamingAvailabilityReducer } from './redux/streamingAvailability/streamingAvailabilityReducer';

const combinedReducer = combineReducers({ streamingAvailabilityReducer });

export default combinedReducer;
