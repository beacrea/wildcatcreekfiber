<template>
  <nav id="navigation">
    <router-link to="overview">Overview</router-link>
    <router-link to="stats">Stats</router-link>
    <router-link to="service">Service</router-link>
    <router-link to="contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This is a message'
    }
  }
}
</script>

<style scoped lang="scss">
// Imports
@import "../globalStyles/global";

#navigation {
  background: black;
  color: map-get($colors-theme, text-light);
  display: flex;
  align-items: center;
  * {
    box-sizing: border-box;
  }
}
a {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 2.4rem 0.8rem;
  flex: 1 auto;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  color: rgba(white, 0.5);
  transition: all 0.5s ease-in-out;
  &:after {
    $border-height: 4px;
    content: '';
    position: absolute;
    bottom: $border-height - 2;
    display: block;
    height: $border-height;
    width: 100%;
    background: transparent;
    left: 0;
    transition: all 0.5s ease-in-out;
  }
  &.router-link-active {
    color: white;
    border-color: map-get($colors-theme, accent);
    &:after {
      background-color: lighten(map-get($colors-theme, accent), 25%);
    }
  }
}
</style>
