import { AxiosRequestConfig } from 'axios';

export interface StreamingAvailabilityResponse {
  posterURLs: {
    original: string;
  };
  title: string;
  overview: string;
  video: string;
}

export interface StreamingAvailabilityConfig extends AxiosRequestConfig {
  params: {
    country: string;
    service: string;
    type: string;
    genre?: string;
    page: string;
    language: string;
  };
  headers: {
    'x-rapidapi-host': string;
    'x-rapidapi-key': string;
  };
}
