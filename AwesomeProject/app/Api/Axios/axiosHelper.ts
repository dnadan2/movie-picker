import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  StreamingAvailabilityItems,
  StreamingAvailabilityResponse,
} from '../StreamingAvailability/interfaces';

export const post = async (
  options: AxiosRequestConfig
): Promise<StreamingAvailabilityItems[]> => {
  return await axios
    .request(options)
    .then(
      (response: AxiosResponse<StreamingAvailabilityResponse>) =>
        response.data.results
    );
};
