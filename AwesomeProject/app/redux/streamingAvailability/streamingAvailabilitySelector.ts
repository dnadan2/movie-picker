import { Selector } from 'reselect';
import { StreamingAvailabilityResponse } from '../../api/StreamingAvailability/interfaces';
import { RootState } from '../../types';

const getAvailableFilms: Selector<RootState, StreamingAvailabilityResponse[]> = (
  state: RootState
) => {
  return state.streamingAvailabilityReducer as StreamingAvailabilityResponse[];
};

export const StreamingAvailabilitySelector = {
  getAvailableFilms,
};
