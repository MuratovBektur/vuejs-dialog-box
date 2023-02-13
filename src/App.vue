<template>
  <div>
    <button @click="showAlert">show alert</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$dialogBox.prompt({
      title: 'another',
      okText: 'YEad',
    })
  },
  methods: {
    showAlert() {
      this.$dialogBox.alert({
        title: 'a',
      })
    },
  },
})
</script>

<style>
* > {
  color: white;
}
</style>
