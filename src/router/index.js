import Vue from 'vue';
import Router from 'vue-router';
import WeatherForm from '@/components/WeatherForm';
import WeatherList from '../components/WeatherList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather-form',
      component: WeatherForm,
    },
    {
      path: '/list',
      name: 'Weather-list',
      component: WeatherList,
    },
  ],
});
