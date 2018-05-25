<template>
  <div class="form-wrapper">
    <h1>Add Weather</h1>
    <router-link
      :to="{name: 'Weather-list'}"
      class="nav-link"
      active-class="active">
      View list
    </router-link>
    <div class="form-container">
      <div class="form-field">
        <span>Wind Speed</span>
        <input type="number" />
      </div>
      <div class="form-field">
        <span>Current Speed</span>
        <input type="number" />
      </div>
      <div class="form-field">
        <span>Swell Hght</span>
        <input type="number" />
      </div>
      <div class="form-field">
        <span>Sea Hght</span>
        <input type="number" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WeatherForm',
};
</script>
