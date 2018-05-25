import * as weatherService from '../../../services/weatherService';
import { FETCH_WEATHER, SET_WEATHER } from './weatherConstants';

export default {
  [FETCH_WEATHER](context) {
    return weatherService.getWeatherList()
      .then(({ data }) => {
        context.commit(SET_WEATHER, data);
        return data;
      });
  },
};
