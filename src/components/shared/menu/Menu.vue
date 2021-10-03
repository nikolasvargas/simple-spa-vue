<template>
  <nav>
    <ul>
      <li v-for="route in paths" :key="route.id">
        <router-link :to="route.path">
          {{route.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  //props tem suporte para parâmetros validadores...
  props: {
    paths: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
</style>
