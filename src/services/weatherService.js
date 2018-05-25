import ApiGateway from './apiGateway';

const weatherListUrl = 'api/weatherList';

export const getWeatherList = () => ApiGateway.get(weatherListUrl);

export const addNewWeatherData = payload => ApiGateway.post(weatherListUrl, payload);
