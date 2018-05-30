import * as weatherListConstants from '@/store/modules/weatherList/weatherConstants';

describe('Weather List Constants', () => {
  it('should get FETCH_WEATHER', () => {
    expect(weatherListConstants.FETCH_WEATHER).toEqual('FETCH_WEATHER');
  });

  it('should get FETCH_WEATHER', () => {
    expect(weatherListConstants.SET_WEATHER).toEqual('SET_WEATHER');
  });
});
