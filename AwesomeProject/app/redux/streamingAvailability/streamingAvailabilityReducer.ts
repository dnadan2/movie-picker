import { createReducer } from 'typesafe-actions';
import {
  onGetStreamingAvailability,
  StreamingAvailabilityAction,
} from '../../actions/streamingAvailabilityAction';
import { StreamingAvailabilityResponse } from '../../api/StreamingAvailability/interfaces';
import { DeepReadonlyObject } from '../../helpers/readonlyInterfaces';
import { StreamingAvailabilityState } from './interfaces';

export const defaultState = {
  films: [] as Partial<StreamingAvailabilityResponse>,
};

export const streamingAvailabilityReducer = createReducer<
  DeepReadonlyObject<StreamingAvailabilityState>,
  StreamingAvailabilityAction
>(defaultState as StreamingAvailabilityState).handleAction(
  onGetStreamingAvailability.success,
  (state, action) => {
    return {
      ...state,
      films: action.payload,
    };
  }
);
