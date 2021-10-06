import { ActionType, createAsyncAction } from 'typesafe-actions';
import { StreamingAvailabilityResponse } from '../api/StreamingAvailability/interfaces';

export const onGetFilmAvailability = createAsyncAction(
  'programme/ON_GET_FILM_AVAILABILITY_REQUEST',
  'programme/ON_GET_FILM_AVAILABILITY_SUCCESS',
  'programme/ON_GET_FILM_AVAILABILITY_FAILURE'
)<void, StreamingAvailabilityResponse, Error>();

export type FilmAvailabilityAction = ActionType<typeof onGetFilmAvailability>;
