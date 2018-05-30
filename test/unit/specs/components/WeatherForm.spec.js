import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';

import WeatherForm from '@/components/WeatherForm';

describe('WeatherForm', () => {
  it('should render', () => {
    const renderer = createRenderer();
    const wrapper = shallow(WeatherForm);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
