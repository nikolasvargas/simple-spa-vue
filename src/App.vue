<template>
  <div class="tbody">
    <my-menu :paths="routes"/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import { routes } from './routes';

export default {
  components: {
    'my-menu': Menu
  },

  data() {
    return {
      routes
    }
  }
}
</script>

<style>
  .tbody {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
</style>
