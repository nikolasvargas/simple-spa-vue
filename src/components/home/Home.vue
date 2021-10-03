<template>
  <div>
    <h1 class="center">{{ title }}</h1>
    <!-- v-on:input data-binding é broken em... -->
    <input type="search" class="input-filter" placeholder="type whatever you want" @input="filterInput = $event.target.value">
    <ul class="image-list">
      <li class="image-list-item" v-for="image in filterImages" :key="image.id">
        <panel :title="image.titulo">
          <responsive-images :url="image.url" :title="image.titulo"/>
          <buttonDelete
            title="remover"
            ptype="button"
            :pconfirm="true"
            @enableButton="removeImage(image)"/>
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImages from '../shared/responsive-images/ResponsiveImages.vue';
import Delete from '../shared/button/Delete.vue';

export default {
  components: {
    panel: Panel,
    ResponsiveImages: ResponsiveImages,
    buttonDelete: Delete
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
  },
  methods: {
    removeImage(image) {
      alert(image.titulo);
    }
  },
  created() {
    axios.get('http://localhost:3000/v1/fotos')
      .then(res => res.data)
      .then(images => this.images = images, err => console.log(err));
  },
  data() {
    return {
      title: "simple-spa-vue",
      images: [],
      filterInput: ''
    }
  },
}
</script>

<style scoped>
  .center {
    text-align: center;
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
