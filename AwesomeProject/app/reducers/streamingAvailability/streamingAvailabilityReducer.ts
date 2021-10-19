import { createReducer } from 'typesafe-actions';
import {
  onGetStreamingAvailability,
  StreamingAvailabilityAction,
} from '../../actions/streamingAvailabilityAction';
import { StreamingAvailabilityResponse } from '../../api/StreamingAvailability/interfaces';
import { DeepReadonlyObject } from '../../helpers/readonlyInterfaces';

export const defaultState = {
  films: [],
};

interface StreamingAvailabilityState {
  films: StreamingAvailabilityResponse[];
}

const reducer = createReducer<
  DeepReadonlyObject<StreamingAvailabilityState>,
  StreamingAvailabilityAction
>(defaultState).handleAction(
  onGetStreamingAvailability.success,
  (state, action) => {
    return {
      films: action.payload,
    };
  }
);

export default reducer;
