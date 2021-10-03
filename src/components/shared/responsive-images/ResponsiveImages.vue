<template>
  <img class="image-content" :src="url" :alt="title">
</template>

<script>
export default {
  props: ['url', 'title']
}
</script>

<style scoped>
  .image-content {
    width: 100%;
  }
</style>
