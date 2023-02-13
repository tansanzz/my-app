<template>
  <div>
            <p>This is my another-route with a sub-component below that has a timer function</p>
            <router-link :to="{name: 'home'}">Home</router-link>
        </div>
</template>

<script>
import { showMessageBox } from "@/commons/globalMessage";
export default {
  beforeRouteLeave: function(to, from, next) {
        console.log("In beforeRouteLeave of AnotherComponent")
        showMessageBox().then((result) => {
          if(result) {
            next();
          }
        })
    }
}
</script>

<style>

</style>