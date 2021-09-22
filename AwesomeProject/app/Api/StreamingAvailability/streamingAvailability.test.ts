import * as AxiosHelper from '../Axios/axiosHelper';
import { getAvailability } from './StreamingAvailability';
import { StreamingAvailabilityConfig } from './interfaces';
import { RecursivePartial } from '../../types';
import { AxiosResponse } from 'axios';

describe('streaming availability', () => {
  test('get availability', async () => {
    const streamingAvailabilityOptions: StreamingAvailabilityConfig = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: 'netflix',
        type: 'movie',
        page: '1',
        language: 'en',
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '9f27369887msh62e186151b8e1edp16b180jsna1809edcca81',
      },
    };

    interface StreamingAvailabilityAxios extends AxiosResponse {
      data: {
        posterURLs: {
          original: string;
        };
        title: string;
        overview: string;
        video: string;
      };
    }

    const mockResponse: RecursivePartial<StreamingAvailabilityAxios> = {
      data: { title: 'some title' },
    };

    const mockRequest = jest
      .fn()
      .mockResolvedValue(mockResponse as StreamingAvailabilityAxios);
    jest.spyOn(AxiosHelper, 'post').mockImplementation(mockRequest);

    const response = await getAvailability('us', 'netflix', 'movie', '1', 'en');

    expect(mockRequest).toHaveBeenCalledWith(streamingAvailabilityOptions);
    expect(response.title).toBe('some title');
  });
});
