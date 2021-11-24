import { combineReducers } from 'redux';
import { streamingAvailabilityReducer } from './redux/streamingAvailability/streamingAvailabilityReducer';

export const combinedReducer = combineReducers({ streamingAvailabilityReducer });

export default combinedReducer
