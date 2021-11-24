import { Selector } from 'reselect';
import { RootState } from '../../types';
import { StreamingAvailabilityState } from './interfaces';

const getAvailableFilms: Selector<RootState, StreamingAvailabilityState> = (
  state: RootState
) => {
  return state.streamingAvailabilityReducer as StreamingAvailabilityState;
};

export const StreamingAvailabilitySelector = {
  getAvailableFilms,
};
