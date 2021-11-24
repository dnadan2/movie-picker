import { createReducer } from 'typesafe-actions';
import {
  onGetStreamingAvailability,
  StreamingAvailabilityAction,
} from '../../actions/streamingAvailabilityAction';
import { DeepReadonlyObject } from '../../helpers/readonlyInterfaces';
import { StreamingAvailabilityState } from './interfaces';

export const defaultState: StreamingAvailabilityState = { films: [] };

export const streamingAvailabilityReducer = createReducer<
  DeepReadonlyObject<StreamingAvailabilityState>,
  StreamingAvailabilityAction
>(defaultState).handleAction(
  onGetStreamingAvailability.success,
  (state, action) => {
    return {
      ...state,
      films: action.payload,
    };
  }
);
