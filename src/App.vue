<template>
  <div id="app">
    <div id="content">
      <Navigation></Navigation>
      <router-view/>
    </div>
    <div id="map">
      <div class="title">Proposed Service Area</div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import mapboxgl from 'mapbox-gl'

export default {
  components: {Navigation},
  name: 'App',
  mounted: function () {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2NmcCIsImEiOiJjanExMGd1aDYwc2w3NDJyMXlhNGpwd3NsIn0.kzJ7I0HYbEkzhKAN4cmB-Q'
    // eslint-disable-next-line
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/wcfp/cjq10iet01waa2rqjv4f6uuuu',
      center: [-96.669735, 39.181795],
      zoom: 14.1
    })
  }
}
</script>

<style lang="scss">
// Imports
@import "globalStyles/global";

#app {
  display: flex;
  height: 100%;
}

#content {
  border: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  width: 100%;
  color: map-get($colors-theme, text-dark);
  transition: all 0.3s ease-out;
}

nav {
  order: 1;
}

#map {
  display: none;
}

@media screen and (min-width: 1100px) {
  #content {
    min-width: 500px;
    width: 40%;
    max-width: 768px;
  }
  #map {
    display: block;
    flex: 1 100%;
    position: relative;
    .title {
      margin: 2.4rem;
      position: absolute;
      background: black;
      font-size: 1.6rem;
      color: white;
      padding: 0.8rem 1.6rem;
      right: 0;
      top: 0;
      z-index: 2;
    }
  }
  nav {
    order: 0;
  }
}
</style>
