import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { StreamingAvailabilityResponse } from '../StreamingAvailability/interfaces';

const streamingAvailabilityOptions: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: '18',
    page: '1',
    language: 'en',
  },
  headers: {
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    'x-rapidapi-key': '9f27369887msh62e186151b8e1edp16b180jsna1809edcca81',
  },
};

export const post = async (
  options: AxiosRequestConfig
): Promise<StreamingAvailabilityResponse[]> => {
  return await axios.request(options).then((response: AxiosResponse<StreamingAvailabilityResponse[]>) => response.data);
};
