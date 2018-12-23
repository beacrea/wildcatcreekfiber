<template>
  <div id="app">
    <div id="content">
      <Navigation></Navigation>
      <router-view/>
    </div>
    <div id="map">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet beatae deleniti doloremque enim est ex excepturi ipsam nam, natus necessitatibus neque placeat praesentium provident quaerat quod sint tempora ullam.</p>
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
}

#map {
  display: none;
}

@media screen and (min-width: 800px) {
  #content {
    min-width: 500px;
    width: 40%;
    max-width: 768px;
  }
  #map {
    display: block;
  }
}
</style>
