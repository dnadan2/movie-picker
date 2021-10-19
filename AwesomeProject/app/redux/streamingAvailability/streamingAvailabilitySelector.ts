import { Selector } from 'reselect';
import { StreamingAvailabilityState } from './interfaces';

const getAvailableFilms: Selector<any, StreamingAvailabilityState> = (
  state: any
) => {
  return state.films;
};

export const StreamingAvailabilitySelector = {
  getAvailableFilms,
};
