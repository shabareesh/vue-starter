import weatherListState from '@/store/modules/weatherList/weatherListState';

describe('Weather List State', () => {
  it('should get the initial state', () => {
    expect(weatherListState.weatherList).toEqual([]);
  });
});
