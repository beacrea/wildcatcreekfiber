<template>
  <div id="app">
    <div id="content">
      <Navigation></Navigation>
      <router-view/>
    </div>
    <div id="map">
      <iframe src="https://api.mapbox.com/styles/v1/wcfp/cjq10iet01waa2rqjv4f6uuuu.html?fresh=true&title=true&access_token=pk.eyJ1Ijoid2NmcCIsImEiOiJjanExMGd1aDYwc2w3NDJyMXlhNGpwd3NsIn0.kzJ7I0HYbEkzhKAN4cmB-Q#14.1/39.181795/-96.669735/0" frameborder="0" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {Navigation},
  name: 'App'
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
  color: $color_light;
  background: grey;
  transition: all 0.3s ease-out;
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
  }
}
</style>
