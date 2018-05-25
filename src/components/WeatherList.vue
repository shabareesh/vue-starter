<template>
  <div class="form-wrapper">
    <h1>Weather List</h1>
    <ul>
      <li v-for="list in weatherList">
        {{list.id}} wind speed {{list.windSpeed}} current speed {{list.currentSpeed}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_WEATHER } from '../store/modules/weatherList/weatherConstants';

export default {
  name: 'WeatherList',
  mounted() {
    this.$store.dispatch(FETCH_WEATHER);
  },
  computed: {
    ...mapGetters([
      'weatherList',
    ]),
  },
};
</script>
