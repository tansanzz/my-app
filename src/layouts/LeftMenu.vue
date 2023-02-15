<template>
  <div>
    <a 
        v-for="(item, index) in menuItems"
        :key="index"   
        :href="item.path"
        @click="clickMenu(item, index)"
    >
        <div>{{ item.text }}</div>
    </a>
  </div>
</template>

<script>
export default {
    computed: {
        menuItems() {
            return this.getMenuItems();
        }
    },
    methods: {
        clickMenu(item, index) {

        },
        getMenuItems() {
            let menuItems = [
                {
                    path: '',
                    text: 'Home',
                },
                {
                    path: '',
                    text: 'Biography',
                }
            ]
            return menuItems;
        }
    }
}
</script>

<style>

</style>