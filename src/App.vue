<template>
  <div class="tbody">
    <h1 class="center">{{ title }}</h1>
    <!-- v-on:input data-binding é broken em... -->
    <input type="search" class="input-filter" placeholder="type whatever you want" v-on:input="filterInput = $event.target.value">
    <ul class="image-list">
      <li class="image-list-item" v-for="image in images" :key="image.id">
        <panel :title="image.titulo">
          <img class="image-content" :src="image.url" :alt="image.titulo">
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Panel from './components/shared/panel/Panel.vue';

export default {

  components: {
    panel: Panel
  },

  data() {
    return {
      title: "simple-spa-vue",
      images: [],
      filterInput: ''
    }
  },
  created() {
    axios.get('http://localhost:3000/v1/fotos')
      .then(res => res.data)
      .then(images => this.images = images, err => console.log(err));
  }
}
</script>

<style>
  .center {
    text-align: center;
  }

  .tbody {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .image-list {
    list-style: none;
  }

  .image-list .image-list-item {
    display: inline-block;
  }

  .image-content {
    width: 100%;
  }
</style>
