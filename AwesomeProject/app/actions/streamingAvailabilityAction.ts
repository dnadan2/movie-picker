import { ActionType, createAsyncAction } from 'typesafe-actions';
import { StreamingAvailabilityItems } from '../api/StreamingAvailability/interfaces';

export const onGetStreamingAvailability = createAsyncAction(
  'programme/ON_GET_FILM_AVAILABILITY_REQUEST',
  'programme/ON_GET_FILM_AVAILABILITY_SUCCESS',
  'programme/ON_GET_FILM_AVAILABILITY_FAILURE'
)<void, StreamingAvailabilityItems[], Error>();

export type StreamingAvailabilityAction = ActionType<
  typeof onGetStreamingAvailability
>;
