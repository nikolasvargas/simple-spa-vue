<template>
  <img class="image-content" :src="url" :alt="title">
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
  .image-content {
    width: 100%;
  }
</style>
