<template>
  <div id="app">
    <router-view/>
    <dialog-wrapper/>
    <button @click="$toast.success('message')">show</button>
  </div>
</template>

<script>
import { DialogWrapper } from 'vue3-promise-dialog'
export default {
  name: 'App',
  components: {
    DialogWrapper
  },
  created() {
    
  }
}
</script>

<style>
</style>
