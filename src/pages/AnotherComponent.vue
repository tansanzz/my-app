<template>
  <div>
            <p>This is my another-route with a sub-component below that has a timer function</p>
            <router-link :to="{name: 'home'}">Home</router-link>
        </div>
</template>

<script>
import { showMessageBox } from "@/commons/globalMessage";
export default {
  beforeRouteLeave: async function(to, from, next) {
        const messageBox = await showMessageBox();
        console.log("hello");
    }
}
</script>

<style>

</style>