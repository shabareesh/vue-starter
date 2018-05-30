import ApiGateway from '@/services/apiGateway';
import { getWeatherList } from '@/services/weatherService';

describe('WeatherService', () => {
  it('should get /weatherList api', () => {
    spyOn(ApiGateway, 'get');

    const weatherListUrl = 'api/weatherList';

    getWeatherList(weatherListUrl);
    expect(ApiGateway.get).toHaveBeenCalledWith('api/weatherList');
  });
});
