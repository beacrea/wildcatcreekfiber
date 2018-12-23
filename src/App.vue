<template>
  <div id="app">
    <div id="content">
      <router-view/>
      <Navigation></Navigation>
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
}

#content {
  border: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: $color_light;
  > div {
    flex: 1 1 auto;
  }
}
</style>
