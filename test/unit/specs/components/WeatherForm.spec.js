import vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';

import WeatherForm from '@/components/WeatherForm';

const weatherList = [
  { id: 1, windSpeed: '1', currentSpeed: '1', swellHght: '1', seaHght: '1', status: 'lock' },
  { id: 2, windSpeed: '2', currentSpeed: '2', swellHght: '2', seaHght: '2', status: 'lock' },
  { id: 4, windSpeed: '4', currentSpeed: '4', swellHght: '4', seaHght: '4', status: 'unlock' },
  { id: 5, windSpeed: '5', currentSpeed: '5', swellHght: '5', seaHght: '5', status: 'lock' },
];

describe('WeatherForm', () => {
  it('should render', () => {
    const renderer = createRenderer()
    const wrapper = shallow(WeatherForm, { data: { weatherList } });
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
