import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { post } from './axiosHelper';

describe('axios helper', () => {
  test('post', async () => {
    const testPostOption: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://some-url.com',
      params: {
        someParam: 'some param',
      },
      headers: {
        'some-header': 'some header',
      },
    };

    const mockResponse: Partial<AxiosResponse> = {
      data: {
        results: [],
      },
    };
  
    const jestFn = jest.fn();

    const mockRequest = jestFn.mockResolvedValue(mockResponse as AxiosResponse);

    jest.spyOn(axios, 'request').mockImplementation(mockRequest);

    var response = await post(testPostOption);

    expect(jestFn).toHaveBeenCalled();
    expect(mockRequest).toHaveBeenCalled();
    expect(response).toBeDefined();
  });
});
