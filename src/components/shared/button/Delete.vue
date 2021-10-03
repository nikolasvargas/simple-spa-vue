<template>
  <button :class="buttonStyle" @click="triggerAction()" :type="ptype">
    {{ title }}
  </button>
</template>
<script>
export default {
  props: {
    ptype: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    pconfirm: {
      required: false,
      default: false,
      type: Boolean,
    },
    pstyle: {
      required: false,
      default: 'button-default',
      type: String
    }
  },
  computed: {
    buttonStyle() {
      if(this.pstyle == 'button-default') return 'but button-default';
      if(this.pstyle == 'button-caution') return 'but button-caution';
    }
  },
  methods: {
    triggerAction() {
      if(this.pconfirm) {
        if(confirm('Do op?')){
          this.$emit('enableButton');
        }
        return;
      }
      this.$emit('enableButton');
    }
  }
}
</script>
<style scoped>
  .but {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .button-caution {
    background: firebrick;
    color: white;
  }

  .button-default {
    background: darkcyan;
    color: white;
  }
</style>
