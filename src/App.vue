<template>
  <div>121233333333</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$dialogBox.confirm({
      title: 'another',
      okText: '12',
    })
  },
})
</script>

<style>
* > {
  color: white;
}
</style>
