<template>
  <div class="tbody">
    <h1 class="center">{{ title }}</h1>
    <!-- v-on:input data-binding é broken em... -->
    <input type="search" class="input-filter" placeholder="type whatever you want" @input="filterInput = $event.target.value">
    <ul class="image-list">
      <li class="image-list-item" v-for="image in filterImages" :key="image.id">
        <panel :title="image.titulo">
          <responsive-images :url="image.url" :title="image.titulo"/>
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Panel from './components/shared/panel/Panel.vue';
import ResponsiveImages from './components/shared/responsive-images/ResponsiveImages.vue';

export default {

  components: {
    panel: Panel,
    ResponsiveImages: ResponsiveImages
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
  },

  //computed properties...
  //são métodos que se declarados dentro desse objeto computed, podem ser chamados como
  //uma propriedade direto na view... (ver exemplo chamando filterImages na linha 7)
  computed: {
    filterImages() {
      if (this.filterInput.trim().length > 0) {
        let exp = new RegExp(this.filterInput.trim(), 'i');
        return this.images.filter(image => exp.test(image.titulo));
      }
      return this.images;
    }
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

  .input-filter {
    display: block;
    width: 100%;
  }
</style>
