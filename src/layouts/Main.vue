<template>
  <div id="app">
    <div id="contentBody">
      <Nav></Nav>
      <main>
        <slot></slot>
      </main>
    </div>
    <div id="map">
      <iframe src="https://api.mapbox.com/styles/v1/wcfp/cjq10iet01waa2rqjv4f6uuuu.html?fresh=true&title=true&access_token=pk.eyJ1Ijoid2NmcCIsImEiOiJjanExMGd1aDYwc2w3NDJyMXlhNGpwd3NsIn0.kzJ7I0HYbEkzhKAN4cmB-Q#14.1/39.181795/-96.669735/0" frameborder="0" height="100%" width="100%"></iframe>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Navigation.vue'

  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  // Imports
  @import "../globalStyles/global";

  #app, main {
    display: flex;
    height: 100%;
  }

  #contentBody {
    background: white;
    height: 100%;
    max-width: 100%;
    width: 100%;
    transition: all 0.3s ease-out;
    display: flex;
    flex-flow: column;
    flex: 1 auto;
  }

  @media screen and (min-width: 70rem) {
    #contentBody {
      width: 40%;
      max-width: 768px;
    }
  }

  #map {
    flex: 1 100%;
  }

  main {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: $padding_side;
    background: #f9f7f5;
  }
</style>
