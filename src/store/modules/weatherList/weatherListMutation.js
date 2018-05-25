import { SET_WEATHER } from './weatherConstants';

export default{
  [SET_WEATHER](state, list) {
    state.weatherList = list;
  },
};
