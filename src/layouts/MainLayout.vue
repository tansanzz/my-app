<template>
    <div class="main flex-row">
        <left-menu />
        <router-view></router-view>
    </div>
</template>

<script>
import LeftMenu from './LeftMenu';
export default {
    components: {
        LeftMenu,
    },
};
</script>

<style>
.main {
    width: 100vw;
    height: 100vh;
}
</style>
