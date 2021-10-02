<template>
  <div>
    <h1>{{ title }}</h1>
    <li v-for="nome in nomes" :key="nome">
      {{nome}}
    </li>
  </div>
</template>

<script>
export default {
  // função que retorna dados para o template.
  data() {
    return {
      title: "simple-spa-vue",
      nomes: [
        'nikolas',
        'vargas'
      ]
    }
  }
}
</script>

<style>
</style>
