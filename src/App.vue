<template>
  <div id="app">
    <router-view/>
    <dialog-wrapper/>
  </div>
</template>

<script>
import { DialogWrapper } from 'vue3-promise-dialog'
export default {
  name: 'App',
  components: {
    DialogWrapper
  }
}
</script>

<style>
</style>
