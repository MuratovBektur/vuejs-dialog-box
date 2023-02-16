<template>
  <div>
    <button @click="showAlert">show alert</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async mounted() {
    const res = await this.$dialogBox.prompt({
      allowConfirmEmptyString: true,
      title: 'another',
      okText: 'YEad',
    })
    console.log('res', res)
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
