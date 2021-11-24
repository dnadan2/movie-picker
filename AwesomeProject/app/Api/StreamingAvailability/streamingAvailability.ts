import {
  StreamingAvailabilityConfig,
  StreamingAvailabilityResponse,
} from './interfaces';
import { post } from '../Axios/axiosHelper';

const streamingAvailabilityOptions: StreamingAvailabilityConfig = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: '',
    service: '',
    type: '',
    page: '',
    language: '',
  },
  headers: {
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    'x-rapidapi-key': '9f27369887msh62e186151b8e1edp16b180jsna1809edcca81',
  },
};

export const getAvailability = async (
  country: string,
  service: string,
  type: string,
  page: string,
  language: string
): Promise<StreamingAvailabilityResponse[]> => {
  return await post(
    getStreamingAvailabilityOptions(country, service, type, page, language)
  ).then((response: StreamingAvailabilityResponse[]) => response);
};

const getStreamingAvailabilityOptions = (
  country: string,
  service: string,
  type: string,
  page: string,
  language: string
): StreamingAvailabilityConfig => {
  streamingAvailabilityOptions.params.country = country;
  streamingAvailabilityOptions.params.service = service;
  streamingAvailabilityOptions.params.type = type;
  streamingAvailabilityOptions.params.page = page;
  streamingAvailabilityOptions.params.language = language;

  return streamingAvailabilityOptions;
};
