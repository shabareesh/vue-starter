import axios from 'axios';
import ApiGateway from '@/services/apiGateway';
import API_URL from '@/apiConfig/config';

describe('Api Gateway', () => {
  const url = '/test/dummy';
  const params = { param1: 'abc', param2: 'xyz' };

  it('should call API URL with params with http get', () => {
    spyOn(axios, 'get');

    ApiGateway.get(url, params);

    const expectedUrl = `${API_URL}/${url}`;
    expect(axios.get).toHaveBeenCalledWith(expectedUrl, { params });
  });

  it('should post to URL with body', () => {
    spyOn(axios, 'post');

    ApiGateway.post(url, params);

    const expectedUrl = `${API_URL}/${url}`;
    expect(axios.post).toHaveBeenCalledWith(expectedUrl, params);
  });
});
